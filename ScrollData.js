class ScrollData {
  getScrollDataFromTop() {
    window.addEventListener("scroll", function() {
      return window.scrollY;
    });
  }
  getScreenYHeight() {
    return window.innerHeight;
  }

  getSizes() {
    const rect = document.querySelector(".container");
    const cont = rect.getBoundingClientRect();
    return cont.bottom;
  }
}
