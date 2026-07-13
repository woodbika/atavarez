const THEME_COLORS = {
  light: "#f8faf9",
  dark: "#1b211f",
};

export class ThemeController {
  constructor({ themeColor }) {
    this.themeColor = themeColor;
    this.mode = "light";
    this.palette = "forest";
  }

  start() {
    this.applyMode(this.mode);
    this.applyPalette(this.palette);
    return this;
  }

  applyMode(mode) {
    this.mode = mode === "dark" ? "dark" : "light";
    document.documentElement.dataset.theme = this.mode;
    this.themeColor.setAttribute("content", THEME_COLORS[this.mode]);
  }

  applyPalette(palette) {
    this.palette = ["forest", "mist", "clay"].includes(palette) ? palette : "forest";
    document.documentElement.dataset.palette = this.palette;
  }
}
