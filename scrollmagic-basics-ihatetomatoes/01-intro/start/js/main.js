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

	// var pinIntroScene3 = new ScrollMagic.Scene({
	// 	triggerElement: '#project02',
	// 	triggerHook: 0.5
	// 	// duration:'30%'
	// })
	// .setPin('#project02')
	// .addTo(smc);



	$('.project').each(function(){
		// build the scene
		var ourScene = new ScrollMagic.Scene({
			//options
			triggerElement: this.children[0],
			duration: '80%',
			// reverse: false // stop animation from repeating
		})
		.setClassToggle(this, 'fade-in')
		.addIndicators()
		.addTo(smc);
	})
});
