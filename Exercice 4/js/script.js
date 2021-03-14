function randColor() {
    return (
      "#" +
      (function (h) {
        return new Array(7 - h.length).join("0") + h;
      })(((Math.random() * (0xffffff + 1)) << 0).toString(16))
    );
  }
  function changeBackgroundColor(self, color) {
    self.style.backgroundColor = color;
  }