import { Lang } from "../data/enums/Lang";

export const changeBgc = (color: string) => {
  document.body.style.backgroundColor = color;
  document.body.style.transition = "0.3s";
};

export const getInitLang = () => {
  const initLang = localStorage.getItem("lang");
  if (initLang !== null && initLang !== undefined) {
    return initLang;
  } else {
    return Lang.de.toString();
  }
};
