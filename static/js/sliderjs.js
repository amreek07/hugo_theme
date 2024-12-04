const wrapper = document.querySelector(".wrapper-slider");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper-slider i");
const carouselChildrens = [...carousel.children];

let isDragging = false,
  isAutoPlay = true,
  startX,
  startScrollLeft,
  timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to the beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach((card) => {
  carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to the end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach((card) => {
  carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Calculate the new scrollLeft position based on the button clicked
    const scrollAmount = btn.id == "left" ? -firstCardWidth : firstCardWidth;
    const newScrollLeft = carousel.scrollLeft + scrollAmount;

    // Scroll smoothly to the new position
    smoothScrollTo(newScrollLeft);
  });
});

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  // Records the initial cursor and scroll position of the carousel
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return; // if isDragging is false return from here
  // Updates the scroll position of the carousel based on the cursor movement
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
};

const infiniteScroll = () => {
  // If the carousel is at the beginning, scroll to the end
  if (carousel.scrollLeft === 0) {
    smoothScrollTo(carousel.scrollWidth - (2 * carousel.offsetWidth));
  }
  // If the carousel is at the end, scroll to the beginning
  else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
    smoothScrollTo(carousel.offsetWidth);
  }

  // Clear existing timeout & start autoplay if the mouse is not hovering over the carousel
  clearTimeout(timeoutId);
  if (!wrapper.matches(":hover")) autoPlay();
};

const autoPlay = () => {
  if (window.innerWidth < 800 || !isAutoPlay) return; // Return if the window is smaller than 800 or isAutoPlay is false
  // Autoplay the carousel after every 2500 ms
  timeoutId = setTimeout(() => {
    const newScrollLeft = carousel.scrollLeft + firstCardWidth;
    smoothScrollTo(newScrollLeft);
  }, 2500);
};
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);

// Function to smoothly scroll to a given scrollLeft position
function smoothScrollTo(newScrollLeft) {
  const currentScrollLeft = carousel.scrollLeft;
  const scrollStep = Math.abs(newScrollLeft - currentScrollLeft) / 20;
  let scrollDirection = currentScrollLeft < newScrollLeft ? 1 : -1;

  function scroll() {
    if (
      (scrollDirection === 1 && carousel.scrollLeft < newScrollLeft) ||
      (scrollDirection === -1 && carousel.scrollLeft > newScrollLeft)
    ) {
      carousel.scrollLeft += scrollDirection * scrollStep;
      requestAnimationFrame(scroll);
    }
  }

  scroll();
}
