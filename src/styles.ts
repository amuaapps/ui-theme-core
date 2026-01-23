import themeCSS from "./theme.css";

/**
 * Injects the Amua Apps UI Theme Core styles into the document head.
 * Call this function once in your application entry point.
 * 
 * @returns void
 */
export function injectStyles(): void {
  if (typeof document === "undefined") {
    return;
  }

  const styleId = "amua-ui-theme-core";
  if (document.getElementById(styleId)) {
    return;
  }

  const style = document.createElement("style");
  style.id = styleId;
  style.textContent = themeCSS;
  document.head.appendChild(style);
}

/**
 * Default export for convenience
 */
export default injectStyles;
