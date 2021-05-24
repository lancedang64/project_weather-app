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

renderWeatherData();
addSearchListener();
