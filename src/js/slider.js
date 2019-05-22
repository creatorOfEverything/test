class Slider {
  constructor(slider, options) {
    this.slider = document.querySelector(slider);
    this.options = options;
  }

  create() {
    if (!this.slider) return;

    this.slider.classList.add("slidy", "slidy_initialized");

    let wrapper = document.createElement("div");
    let slides = this.slider.querySelectorAll(
      `.${this.slider.classList[0]} > *`
    );

    slides[0].classList.add("slidy__slide_active");

    wrapper.classList.add("slidy__wrapper");

    [].forEach.call(slides, function(e) {
      e.classList.add("slidy__slide");
      wrapper.append(e);
    });

    this.slider.append(wrapper);

    this.setOptions();
  }

  setOptions() {
    if (!this.options) return;

    let { arrows, touch, leftArrow, rightArrow } = this.options;

    if (arrows) {
      let arrowsContainer = document.createElement("div");
      let leftArrow = document.createElement("button");
      let rightArrow = document.createElement("button");

      leftArrow.classList.add("slidy__btn-left", "slidy__btn");
      rightArrow.classList.add("slidy__btn-right", "slidy__btn");

      leftArrow.innerHTML = "<i class='slidy__left-arrow slidy__arrows'><</i>";
      rightArrow.innerHTML =
        "<i class='slidy__right-arrow slidy__arrows'>></i>";

      leftArrow.addEventListener("click", this.goToPrevSlide.bind(this));
      rightArrow.addEventListener("click", this.goToNextSlide.bind(this));

      arrowsContainer.classList.add("slidy__container");
      arrowsContainer.append(leftArrow, rightArrow);
      this.slider.append(arrowsContainer);
    }

    if (touch) {
      var startTouchX;
      this.slider.addEventListener("touchstart", e => {
        startTouchX = e.touches[0].clientX;
      });
      this.slider.addEventListener("touchend", e => {
        let movingTouchX = e.changedTouches[0].clientX;

        if (movingTouchX !== startTouchX) {
          if (movingTouchX > startTouchX) {
            this.goToPrevSlide();
          } else {
            this.goToNextSlide();
          }
        }
      });
    }

    if (leftArrow) {
      this.setLeftArrow();
    }

    if (rightArrow) {
      this.setRightArrow();
    }
  }

  goToPrevSlide() {
    let currentSlide = this.slider.querySelector(".slidy__slide_active");
    let previousSlide = currentSlide.previousSibling;

    if (previousSlide == null) {
      return;
    }

    currentSlide.classList.remove("slidy__slide_active");
    previousSlide.classList.add("slidy__slide_active");
  }

  goToNextSlide() {
    let currentSlide = this.slider.querySelector(".slidy__slide_active");
    let nextSlide = currentSlide.nextSibling;

    if (nextSlide == null) {
      return;
    }

    currentSlide.classList.remove("slidy__slide_active");
    nextSlide.classList.add("slidy__slide_active");
  }

  setLeftArrow() {
    let { leftArrow } = this.options;
    this.slider.querySelector(
      `.${this.slider.classList[0]} .slidy__btn-left`
    ).innerHTML = leftArrow;
  }

  setRightArrow() {
    let { rightArrow } = this.options;
    this.slider.querySelector(
      `.${this.slider.classList[0]} .slidy__btn-right`
    ).innerHTML = rightArrow;
  }
}
