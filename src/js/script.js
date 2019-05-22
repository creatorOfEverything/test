//=include slider.js

let leftArrow = `<svg class="icon icon-chevronleft_106416" viewBox="0 0 28 36" xmlns="http://www.w3.org/2000/svg">
<use xlink:href="#chevronleft_106416"/>
</svg>`;
let rightArrow = `<svg class="icon icon-chevronright_106413" viewBox="0 0 28 36" xmlns="http://www.w3.org/2000/svg">
<use xlink:href="#chevronright_106413"/>
</svg>`;

window.onload = () => {
  let slider = new Slider(".slider", {
    arrows: true,
    touch: true,
    leftArrow: `<i class="slider__prev slider__arrow">${leftArrow}</i>`,
    rightArrow: `<i class="slider__next slider__arrow">${rightArrow}</i>`
  });

  slider.create();
};
