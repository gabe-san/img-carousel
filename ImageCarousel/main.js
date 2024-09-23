// used to count where you are in the nodelist when displaying the pictures/navigation buttons
let index = 0;

let slideList = document.querySelectorAll('.carousel');
let navigationList = document.querySelectorAll('.navigation');

// used to keep track how far interval has gone since setinterval() returns numeric non zero value
let intervalId = null;

document.addEventListener('DOMContentLoaded', initializeSlider);
const prev = document.querySelector('.previous');
prev.addEventListener('click', () => {
  prevSlide();
})
const next = document.querySelector('.next');
next.addEventListener('click', () => {
  nextSlide();
})

navigationList.forEach((button, index) => {
  button.addEventListener('click', () => {
    currentSlide(index);
  })
});

// only called on page load but if statement ensures that slide will only show if there is an image
// also sets up 5second loop through the images
function initializeSlider() {
  if (slideList.length > 0) {
    slideList[index].classList.add('displaySlide');
    intervalId = setInterval(nextSlide, 5000);
    navigationList[index].classList.add('active');
  }
}

// takes indexArray argument to tell intializeslider when to reset loop when reaching the end or if prev button leads to negative value on index
// forEach ensures that when corresponding images are shown, the buttons and image line up
function showSlide(indexArray) {
  if (indexArray >= slideList.length) {
    index = 0;
  }
  else if (indexArray < 0) {
    index = slideList.length - 1;
  }
  slideList.forEach(slide => {
    slide.classList.remove('displaySlide');
  });
  slideList[index].classList.add('displaySlide');

  navigationList.forEach(navBtn => {
    navBtn.classList.remove('active');
  })
  navigationList[index].classList.add('active');
}

// callback to showslide, index is decremented 
function prevSlide() {
  clearInterval(intervalId);
  index--;
  showSlide(index)
}

function nextSlide() {
  index++;
  showSlide(index)
}

// used for navigation buttons n corresponds to index of navigation nodelist. instead of making multiple addeventlisteners, loop through nodelist using element and n(index) as arguments
function currentSlide(n) {
  showSlide(index = n);
}