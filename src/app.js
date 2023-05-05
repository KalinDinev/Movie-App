import { homeView } from "./views/homeView.js";
import { onSubmit } from "./views/submitView.js";

import { page, render } from "./lib.js";

const main = document.querySelector("#main");

page(decorate);
page(homeView);
page.start();

function decorate(ctx, next) {
  ctx.render = (content) => render(content, main);

  next();
}


const form =document.querySelector('form');
form.addEventListener('submit',onSubmit)