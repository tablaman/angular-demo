$(document).ready(function(){

	// Initiate ScrollMagic
	var smc = new ScrollMagic.Controller();
	// pinning
	var pinIntroScene = new ScrollMagic.Scene({
		triggerElement: '#intro',
		triggerHook: 0,
		// duration:'30%'
	})
  .setTween(TweenMax.from($bcg, 1, {y: '-40%', autoAlpha: 0.3, ease:Power0.easeNone}))
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
		.addIndicators()
		.addTo(smc);
	})
});
