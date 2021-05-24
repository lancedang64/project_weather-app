const errorDiv = document.querySelector('.error');

function renderSearchError(cityName) {
    errorDiv.textContent = `Cannot find a city with the name "${cityName}"`;
}

function removeSearchError() {
    errorDiv.textContent = '';
}

export { renderSearchError, removeSearchError }