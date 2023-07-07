// Importing Director
import Director from './director.min.js'

console.log("hello!");

// Setup for line

let DOMTranslateX = 0
const lineElement = document.querySelector('#line')
const lineContainer = document.querySelector('#i-am-spacer')

const calculateTranslateXOffset = () => {
	const lineBounds = lineElement.getBoundingClientRect()
	const containerBounds = lineContainer.getBoundingClientRect()
	
	const lineWidth = lineBounds.width
	const containerWidth = containerBounds.width;
	const cardToContainerRatio = lineWidth/ containerWidth
	const translateDistance = (1 - cardToContainerRatio) / cardToContainerRatio
	return translateDistance * 100
}

DOMTranslateX = calculateTranslateXOffset()


// animating line
const DOMLineWrapper = document.querySelector('#i-am-spacer')
const DOMCameraLine = document.querySelector('#line')

const DOMLineScene = new Director.Scene()

DOMLineScene.fromTo(DOMCameraLine, {translateX: [DOMTranslateX/4, DOMTranslateX/2]}, { duration: 1, ease: 'easeOutQuint' }, 0.25)

const DOMCamera = new Director.Camera(DOMLineWrapper, DOMLineScene)

var update = () => {
	DOMLineScene.setProgress(DOMCamera.progress)
	window.requestAnimationFrame(update)
}
window.requestAnimationFrame(update)


// when scrolled past a certain point, change line position to be fixed
const line = document.getElementById('line')
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // If the "designer" div is intersecting with the viewport, change the display property of the "line" div to "fixed"
        line.style.position = 'fixed';
		    line.style.top = '12.5vh';
        // line.style.transform = 'translateY(-50%)';
      } else {
        // If the "designer" div is not intersecting with the viewport, revert the display property of the "line" div to its default value
        line.style.position = 'absolute';
		    line.style.top = '80vh';
        // line.style.transform = 'translateY(0)';
      }
    });
  });

// observe to see if line should be visible
const lineVisible = document.getElementById('line-visible');
observer.observe(lineVisible);

// DOM Camera 2
const iAmContainer = document.getElementById('i-am-container');
const iAmSection = document.getElementById('i-am');
const iAmText = document.getElementById('i-am-text');

const DOMIAmScene = new Director.Scene()

DOMIAmScene.fromTo(iAmText, {opacity: [0, 1]}, { duration: 1, ease: 'easeInCirc' }, 0.25)

const DOMCamera2 = new Director.Camera(iAmSection, DOMIAmScene, {offset: 1000})

var update2 = () => {
	DOMIAmScene.setProgress(DOMCamera2.progress)
	window.requestAnimationFrame(update2)
}
window.requestAnimationFrame(update2)

// when scrolled past a certain point, change "I am" position to be fixed
const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // If the "designer" div is intersecting with the viewport, change the display property of the "I am" div to "fixed"
        iAmText.style.position = 'fixed';
        iAmText.style.left = '25vw';
		    iAmText.style.top = '50vh';
      } else {
        // If the "designer" div is not intersecting with the viewport, revert the display property of the "I am" div to its default value
        iAmText.style.position = 'absolute';
        iAmText.style.left = '25vw';
        iAmText.style.top = '50vh';
      }
    });
  });

const designerSpacer = document.getElementById('designer-spacer');
observer2.observe(designerSpacer);



// when its at 50%
    // other text slowly fade out
    // when entire thing is visible add flying black thing

//https://www.youtube.com/watch?v=cBOW8Nbb2PQ
// writing effect for designer part

