import { getWeatherBy } from './api/getWeatherBy';
import { getCityNameFromInput } from './functions/getCityNameFromInput';
import { getInfoFromData } from './functions/getInfoFromData';
import { getUnitsFromInput } from './functions/getUnitsFromInput';
import { renderInfo } from './functions/renderInfo';
import { removeSearchError, renderSearchError } from './functions/error';
import './style.css';

async function renderWeatherData() {
  const cityName = getCityNameFromInput() || 'Sydney';
  const units = getUnitsFromInput();
  try {
    const data = await getWeatherBy(cityName, units);
    const info = getInfoFromData(data);
    renderInfo(info);
    removeSearchError();
  } catch (error) {
    renderSearchError(cityName);
  } finally {
  }
}

function addSearchListener() {
  const search = document.querySelector('#city-name');
  search.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') renderWeatherData();
  });
}

function addUnitsListener() {
  const units = document.querySelectorAll('input[name=units]');
  units.forEach((unit) => unit.addEventListener('change', changeUnits));
}

function changeUnits() {
  const currentUnits = getUnitsFromInput();
  const tempNums = document.querySelectorAll('.tempNum');
  tempNums.forEach((tempNum) => convertUnit(tempNum, currentUnits));
}

function convertUnit(tempNum, currentUnits) {
  if (currentUnits === 'imperial') {
    const cToF = (parseFloat(tempNum.textContent) * 9) / 5 + 32;
    tempNum.textContent = parseFloat(cToF.toFixed(2));
  } else {
    const fToC = ((parseFloat(tempNum.textContent) - 32) * 5) / 9;
    tempNum.textContent = parseFloat(fToC.toFixed(2));
  }
}

renderWeatherData();
addSearchListener();
addUnitsListener();
