import html from "/src/assets/languages/html.png";
import css from "/src/assets/languages/css.png";
import js from "/src/assets/languages/js.png";
import react from "/src/assets/languages/react.png";
import pc from "/src/assets/pc.png";

const languagesArray = [
  { url: html, class: "html" },
  { url: css, class: "css" },
  { url: js, class: "js" },
  { url: react, class: "react" },
];

export function renderLanguages() {
  const container = document.querySelector(".languages-content");

  languagesArray.forEach((lang) => {
    const div = document.createElement("div");
    const newImage = new Image();

    newImage.src = lang.url;
    div.setAttribute("class", lang.class);
    container.appendChild(div);
    div.appendChild(newImage);
  });
}

export function renderPc() {
  const container = document.querySelector(".pc");
  const newImage = new Image();

  newImage.src = pc;
  container.appendChild(newImage);
}
