	var Thumbnail = require('thumbnail');
	
	
	var ThumbnailList =  React.createClass({
		render: function () {
			var list = this.props.thumbnailData.map(function(thumbnailProp){
				return <div className="col-sm-5"> <Thumbnail {...thumbnailProp} /> </div>
			});
			
			return <div>
						{list}
					</div>
			
		}
	});