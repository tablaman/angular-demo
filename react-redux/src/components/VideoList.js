import React, { Component } from 'react';
import VideoListItem from './VideoListItem';


class VideoList extends Component {
  constructor (props) {
    super (props)
    this.renderVideoItems = this.renderVideoItems.bind(this);
  }
  renderVideoItems () {
    this.props.videos.map((video) => {
      return (
        <VideoListItem
          key={video.etag}
          video={video} />
      )
    });
  }
  render() {
    return (
      <ul className="col-md-4 list-group">

        {this.props.videos.map((video) => {
          return (
            <VideoListItem
              onVideoSelect={this.props.onVideoSelect}
              key={video.etag}
              video={video} />
          )
        })}
      </ul>
    )
  }
}

export default VideoList;
