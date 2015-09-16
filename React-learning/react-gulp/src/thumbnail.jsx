	var Badge = require('badge');
	
	var Thumbnail =  React.createClass({
		render: function () {
		return <div class="row">
			<div class="col-sm-6 col-md-4">
				<div className="thumbnail">
				<img className="img-responsive" src={this.props.imageUrl}/>
				<div className="caption">
					<h3>{this.props.header}</h3>
					<p>{this.props.description}</p>
					<p>
					
					<Badge title={this.props.title} number={this.props.number}/>
					</p>
				</div>
				</div>
			</div>
			</div>
		}
	});