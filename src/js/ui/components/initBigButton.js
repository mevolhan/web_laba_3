import bigButtonData from "../../mockData/bigButtonData.js";
import { bigButtonTemplate } from "../templates/bigButtonTemplate.js";

const initBigButton = () => {
  const bigButtonNode = document.querySelector(".big_button");

  const template = bigButtonTemplate(bigButtonData);
  bigButtonNode.insertAdjacentHTML("beforeend", template);
};

export default initBigButton;

