var options = {
	thumbnailData: [{
		title: 'React',
		number: 32,
		header: 'Learn React',
		description: 'React is ok laaaaaaa',
		imageUrl: 'https://facebook.github.io/react/img/logo_og.png'
	
	}, {
		title: 'GULP',
		number: 12,
		header: 'Learn Gulp is cool',
		description: 'gulp will speed up your dev workflow',
		imageUrl: 'https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png'
	
	}]
}

	
	
	// React, please render this class
	// var el = React.createElement(Thumbnail,  options);
	var el2 = React.createElement(ThumbnailList, options);
	
	
	// React, after you render this class, place it in my body tag
	// React.render(el, document.querySelector('.target'));
	React.render(el2, document.querySelector('.target'));
