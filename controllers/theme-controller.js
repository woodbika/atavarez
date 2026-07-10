export class ThemeController {
  constructor({ button, themeColor }) {
    this.button = button;
    this.label = button.querySelector(".theme-toggle-label");
    this.themeColor = themeColor;
  }

  start() {
    this.applyTheme("light");
    this.button.addEventListener("click", () => {
      const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      this.applyTheme(nextTheme);
    });
  }

  applyTheme(theme) {
    const isDark = theme === "dark";
    document.documentElement.dataset.theme = theme;
    const label = isDark ? "Activar modo claro" : "Activar modo oscuro";
    this.button.setAttribute("aria-pressed", String(isDark));
    this.button.setAttribute("aria-label", label);
    this.button.setAttribute("title", label);
    this.label.textContent = label;
    this.themeColor.setAttribute("content", isDark ? "#1b211f" : "#f8faf9");
  }
}
