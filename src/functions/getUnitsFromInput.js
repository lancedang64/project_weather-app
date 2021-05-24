function getUnitsFromInput() {
  return document.querySelector('input[name=units]:checked').value;
}

export { getUnitsFromInput };
