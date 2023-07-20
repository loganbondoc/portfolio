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


// // when scrolled past a certain point, change line position to be fixed
const line = document.getElementById('line')
// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         // If the "designer" div is intersecting with the viewport, change the display property of the "line" div to "fixed"
//         line.style.position = 'fixed';
// 		    line.style.top = '12.5vh';
//       } else {
//         // If the "designer" div is not intersecting with the viewport, revert the display property of the "line" div to its default value
//         line.style.position = 'absolute';
// 		    line.style.top = '80vh';
//       }
//     });
//   });

// when scrolled past a certain point, change line position to be fixed

const centerLine = document.getElementById('center-line');
const centerLineContainer = document.getElementById('center-line-container');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // making line replacement
        line.style.display = 'none';
        centerLineContainer.style.display = 'flex';
      } else {
        // If the "designer" div is not intersecting with the viewport, revert the display property of the "line" div to its default value
        line.style.display = 'block';
        line.style.position = 'absolute';
		    line.style.top = '80vh';
        centerLineContainer.style.display = 'none';
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
        iAmText.style.left = '35vw';
		    iAmText.style.top = '47.5vh';
      } else {
        // If the "designer" div is not intersecting with the viewport, revert the display property of the "I am" div to its default value
        iAmText.style.position = 'absolute';
        iAmText.style.left = '35vw';
        iAmText.style.top = '10vh';
      }
    });
  });

const iAmVisible = document.getElementById('i-am-visible');
observer2.observe(iAmVisible);

const designerSvg = document.getElementById('designer-svg')

// DOM Camera 3
const designerSection = document.getElementById('designer');

const DOMDesignerScene = new Director.Scene()

DOMDesignerScene.fromTo(designerSvg, {opacity: [0, 1]}, { duration: 1, ease: 'easeInCirc' }, 0.25)

const DOMCamera3 = new Director.Camera(designerSection, DOMDesignerScene, {offset: 1000})

var update3 = () => {
	DOMDesignerScene.setProgress(DOMCamera3.progress)
	window.requestAnimationFrame(update3)
}
window.requestAnimationFrame(update3)

// when scrolled past a certain point, change "I am" position to be fixed
const observer3 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // If the "designer" div is intersecting with the viewport, change the display property of the "I am" div to "fixed"
      designerSvg.style.position = 'fixed';
      designerSvg.style.left = '75vw';
      designerSvg.style.top = '50vh';
    } else {
      // If the "designer" div is not intersecting with the viewport, revert the display property of the "I am" div to its default value
      designerSvg.style.position = 'absolute';
      designerSvg.style.left = '75vw';
      designerSvg.style.top = '50vh';
    }
  });
});

const designerVisible = document.getElementById("designer-visible")
observer3.observe(designerVisible);

// DOM Camera 4
const developerSpacer = document.getElementById('developer-spacer');
const blackBackground = document.querySelector('.black-background');
// const fixedCenterLine = document.getElementById('center-line');
const DOMDeveloperSpacerScene = new Director.Scene()

DOMDeveloperSpacerScene.fromTo(designerSvg, {opacity: [1, 0]}, { duration: 1, ease: 'easeInCirc' }, 0.25)
DOMDeveloperSpacerScene.fromTo(centerLine, {scaleY: [1, 0.25]}, { duration: 1, ease: 'easeInCirc' }, 0.25)
DOMDeveloperSpacerScene.fromTo(blackBackground, {scale: [0, 1], opacity: [0, 1]}, { duration: 1, ease: 'easeInCirc' }, 0.25)
const DOMCamera4 = new Director.Camera(developerSpacer, DOMDeveloperSpacerScene, {offset: 1000})
// fade background to black
// change I am a text to white

var update4 = () => {
	DOMDeveloperSpacerScene.setProgress(DOMCamera4.progress)
	window.requestAnimationFrame(update4)
}
window.requestAnimationFrame(update4)

// when scrolled past a certain point, change black background is fixed
const observer4 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // If the "designer" div is intersecting with the viewport, change the display property of the "I am" div to "fixed"
      blackBackground.style.position = 'fixed';
      blackBackground.style.top = '0vh';
    } else {
      // If the "designer" div is not intersecting with the viewport, revert the display property of the "I am" div to its default value
      blackBackground.style.position = 'absolute';
    }
  });
});

const blackBgVisible = document.getElementById("black-bg-visible")
observer4.observe(blackBgVisible);

function typeWord(word, target) {
  if (typeof word !== 'string') {
    console.error('The "word" parameter must be a string.');
    return;
  }

  let wordArray = word.split("");
  var displayText = "";

  for (let i = 0; i < wordArray.length; i++) {
    setTimeout(() => { // Use an anonymous function or arrow function to preserve the current value of 'i'
      displayText = displayText + wordArray[i];
      target.innerHTML = displayText;
    }, 200 * i); // Multiply the delay by 'i' to increment the delay for each character
  }
}

// when scrolled past a certain point, change black background is fixed
const typedText = document.getElementById("typed-text");
const observer5 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      Director.addClass(iAmText, {class: "white-txt"})
      // add a new line that is the same dimensions and is in the middle of screen
      Director.addClass(centerLine, {class: "blinking"})
      typeWord('developer', typedText);


      // make text colour white
      // make line blink
      // wait a lil bit then start adding span stuff
      
    } else {
      Director.removeClass(iAmText, {class: "white-txt"})
      Director.removeClass(centerLine, {class: "blinking"})
      typedText.innerHTML = "";
      // text colour is black
      // line is not blinking
      // delete whatever is in the span
      
    }
  });
});

const developerTypeSection = document.getElementById("developer-type");
observer5.observe(developerTypeSection);

// DOM Camera 5
const blackBgExit = document.getElementById('black-bg-exit');
const blackBgExitScene = new Director.Scene()

// blackBgExitScene.fromTo(designerSvg, {opacity: [1, 0]}, { duration: 1, ease: 'easeInCirc' }, 0.25)
blackBgExitScene.fromTo(centerLine, {opacity: [1, 0]}, { duration: 1, ease: 'easeInCirc' }, 0.25)
blackBgExitScene.fromTo(blackBackground, {opacity: [1, 0]}, { duration: 1, ease: 'easeInCirc' }, 0.25)
blackBgExitScene.fromTo(iAmText, {opacity: [1, 0]}, { duration: 1, ease: 'easeInCirc' }, 0.25)
blackBgExitScene.fromTo(typedText, {opacity: [1, 0]}, { duration: 1, ease: 'easeInCirc' }, 0.25)
const DOMCamera5 = new Director.Camera(blackBgExit, blackBgExitScene, {offset: 1000})

var update5 = () => {
	blackBgExitScene.setProgress(DOMCamera5.progress)
	window.requestAnimationFrame(update5)
}
window.requestAnimationFrame(update5)

// fade background to black
// change I am a text to white

// add scroll down element for intro

//https://www.youtube.com/watch?v=cBOW8Nbb2PQ
// writing effect for designer part

