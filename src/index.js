import { getWeatherBy } from './api/getWeatherBy';
import { getCityNameFromInput } from './functions/getCityNameFromInput';
import { getInfoFromData } from './functions/getInfoFromData';
import { renderInfo } from './functions/renderInfo';
import './style.css';

async function renderWeatherData() {
  const cityName = getCityNameFromInput();
  // get units from toggle
  const units = 'metric';

  // render loading animation

  const data = await getWeatherBy(cityName, units);

  // remove loading animation

  // render info
  const info = getInfoFromData(data);
  renderInfo(info);
}

renderWeatherData();
