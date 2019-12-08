import "../../style/speech-rec.scss";


class Timer extends React.Component {
	state = {
		seconds: 30,
		startRecognizer: true
	};

	componentDidMount() {
		this.myInterval = setInterval(() => {
			if (this.state.seconds === 0) {
				clearInterval(this.myInterval);
				
				this.setState({
					startRecognizer:false
				}, () => this.props.timerDoneCallback(this.state.startRecognizer));
				
			} else {
				this.setState(({ seconds }) => ({
					seconds: seconds - 1
				}));
			}
		}, 1000)
	}

	componentWillUnmount() {
		clearInterval(this.myInterval);
	}

	render() {
		return (
			<div>
				<button  className = "startTimerRed">{this.state.seconds}</button>
				<h1>Time remaining {this.state.seconds}</h1>
			</div>
		);
	}
}
export default Timer;
