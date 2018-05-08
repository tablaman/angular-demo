$(document).ready(function(){

	// Initiate ScrollMagic
	var smc = new ScrollMagic.Controller();
	// pinning
	var pinIntroScene = new ScrollMagic.Scene({
		triggerElement: '#intro',
		triggerHook: 0,
		// duration:'30%'
	})

	.setPin('#intro',{pushFollowers: false})
	.addTo(smc);

	var pinIntroScene2 = new ScrollMagic.Scene({
		triggerElement: '#project01',
		triggerHook: 0
		// duration:'30%'
	})
	.setPin('#intro',{pushFollowers: false})
	.addTo(smc);


	$('.project').each(function(){
		// build the scene
		var ourScene = new ScrollMagic.Scene({
			//options
			triggerElement: this.children[0],
			duration: '90%',
			// reverse: false // stop animation from repeating
		})
		.setClassToggle(this, 'fade-in')
		.addTo(smc);
	})

  // var ourScene1 = new ScrollMagic.Scene({
	// 		//options
	// 		triggerElement: "#intro",
	// 		duration: '90%',
	// 		// reverse: false // stop animation from repeating
	// 	})
	// 	.setClassToggle("#intro", 'fade-in')
  //   .setTween(TweenMax.from("#intro h1", 1, {y: '60%', autoAlpha: 0.3, ease:Power4.easeOut})
	// 	.addTo(smc);
	// });
  // var ourScene2 = new ScrollMagic.Scene({
	// 		//options
	// 		triggerElement: "#project01",
	// 		duration: '90%',
	// 		// reverse: false // stop animation from repeating
	// 	})
	// 	.setClassToggle("#project01", 'fade-in')
  //   .setTween(TweenMax.from("#project01 h2", 1, {y: '60%', autoAlpha: 0.3, ease:Power4.easeOut})
	// 	.addTo(smc);
	// });

});

// var $box = $('#project01 h2');
// TweenMax.from($box, 3, {y: '60%', autoAlpha: 0.3, ease:Power4.easeOut});
