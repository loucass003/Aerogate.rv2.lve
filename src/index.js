import Vivus from 'vivus'
import 'impress.js';
import 'particles.js'

if (__DEV__) {
	document.write('<script src="http://localhost:3001/webpack-dev-server.js"></script>');
}

const fritzing = new Vivus('Radio_fritzing', {duration: 50, file: 'img/Radio_fritzing.svg'});
const exigences = new Vivus('Anim_exigences', {duration: 50, file: 'img/Exigence_short.svg', onReady: function (myVivus) {
  //left: 50%; transform: translate(-30%, 0) ; position: absolute;
  myVivus.el.setAttribute('height', '800px');
  myVivus.el.style.left = "50%";
  myVivus.el.style.transform = "translate(10%, -10%) scale(1.2)";
}});

impress().init();

const rootElement = document.getElementById( "impress" );

reset();

rootElement.addEventListener( "impress:stepenter", function(event) {
  var currentStep = event.target;

  console.log( "Entered the Step Element '" + currentStep.id + "'" );
  if(currentStep.id === "cablage") {
  	fritzing.play();
  } else if(currentStep.id === "exigences") {
    exigences.play();
  } else {
    reset();
  }
})

function reset() {
  fritzing.reset()
  exigences.reset()
}

document.addEventListener( "impress:substep:show", function() {
	console.log("call");
}, false);


particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});