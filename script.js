const list = document.querySelectorAll("strong");
const listArr = Array.from(list);
const darkIcon = document.querySelector(".dark");
const lightIcon = document.querySelector(".light");
const body = document.querySelector("body");

window.addEventListener("load", () => {
  addBlue();
  addGreen();
  addRed();
});

darkIcon.addEventListener("click", () => {
  darkIcon.classList.add("invisible");
  lightIcon.classList.remove("invisible");
  body.classList.add("darkmode");
});

lightIcon.addEventListener("click", () => {
  lightIcon.classList.add("invisible");
  darkIcon.classList.remove("invisible");
  body.classList.remove("darkmode");
});

const greenGems = [
  "explosive trap",
  "lesser poison support",
  "onslaught support",
  "herald of ice",
  "trap and mine damage support",
  "added cold damage support",
  "chain support",
  "caustic arrow",
  "pierce support",
  "rain of arrows",
  "mirage archer support",
  "scourage arrow",
  "lightning arrow",
  "tornado shot"
];
const blueGems = [
  "freezing pulse",
  "orb of storms",
  "elemental proliferation support",
  "frost blink",
  "arcane surge support",
  "added lightning damage support",
  "flame dash",
  "arc",
  "frost bomb",
  "herald of thunder",
  "wave of conviction",
  "controlled destruction support",
  "conductivity",
  "lightning spire trap"
];
const redGems = ["elemental damage with attacks support"];

const addBlue = () => {
  const blueList = listArr.filter(element =>
    blueGems.includes(element.innerText)
  );
  blueList.forEach(el => el.classList.add("blue"));
};

const addGreen = () => {
  const greenList = listArr.filter(element =>
    greenGems.includes(element.innerText)
  );
  greenList.forEach(el => el.classList.add("green"));
};

const addRed = () => {
  const redList = listArr.filter(element =>
    redGems.includes(element.innerText)
  );
  redList.forEach(el => el.classList.add("red"));
};
