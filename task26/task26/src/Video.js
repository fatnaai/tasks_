import React from 'react';

export class Video extends React.Component {
  render() {
    return (
      <div>
        <video src={this.props.src} controls autostart autoPlay muted />
      </div>
    );
  }
}
export default Video;