const React = require('react')

class DigitalClicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = { timesClicked: 0 }
  }

  incrementClick() {
    this.setState({timesClicked: this.state.timesClicked+1});
  }

  render() {
    return (
      <button onClick={this.incrementClick.bind(this)}>{this.state.timesClicked}</button>
    );
  }
};

module.exports = DigitalClicker
