function setPageScroll(value) {
  localStorage.setItem('page_scroll', value);
}

function getPageScroll() {
  return localStorage.getItem('page_scroll');
}

function saveScroll() { // added function
  const currentPosition = window.scrollX + "_" + window.scrollY;
  setPageScroll(currentPosition);
}

function loadScroll() {
  const foundPosition = getPageScroll();
  if (foundPosition) {
    const [xPosition, yPosition] = foundPosition.split("_");
    setTimeout(function() {
      window.scrollTo(parseInt(xPosition), parseInt(yPosition))
    }, 0);
  }
}