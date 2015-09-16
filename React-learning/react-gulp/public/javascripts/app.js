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

// Define a class
	var Badge =  React.createClass({displayName: "Badge",
		render: function () {
		this.props 
		
		return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
			this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
			)
		}
	});
	var ThumbnailList =  React.createClass({displayName: "ThumbnailList",
		render: function () {
			var list = this.props.thumbnailData.map(function(thumbnailProp){
				return React.createElement("div", {className: "col-sm-5"}, " ", React.createElement(Thumbnail, React.__spread({},  thumbnailProp)), " ")
			});
			
			return React.createElement("div", null, 
						list
					)
			
		}
	});
	var Thumbnail =  React.createClass({displayName: "Thumbnail",
		render: function () {
		return React.createElement("div", {class: "row"}, 
			React.createElement("div", {class: "col-sm-6 col-md-4"}, 
				React.createElement("div", {className: "thumbnail"}, 
				React.createElement("img", {className: "img-responsive", src: this.props.imageUrl}), 
				React.createElement("div", {className: "caption"}, 
					React.createElement("h3", null, this.props.header), 
					React.createElement("p", null, this.props.description), 
					React.createElement("p", null, 
					
					React.createElement(Badge, {title: this.props.title, number: this.props.number})
					)
				)
				)
			)
			)
		}
	});