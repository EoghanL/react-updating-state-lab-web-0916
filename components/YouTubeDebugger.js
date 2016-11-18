const React = require('react')

class YouTubeDebugger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }
  changeBitrate() {
    this.setState(Object.assign({}, this.state, this.state.settings.bitrate = 12 ))
  };
  changeResolution(){
    this.setState({
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '720p'
        }
      }
    })
  };
  render() {
    return(
      <div>
        <button className='bitrate' onClick={this.changeBitrate.bind(this)}></button>
        <button className='resolution' onClick={this.changeResolution.bind(this)}></button>
      </div>
    )
  }
}

module.exports = YouTubeDebugger
