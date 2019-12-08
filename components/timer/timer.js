class Timer extends React.Component {
	state = {
		seconds: 60
	};

	componentDidMount() {
		this.myInterval = setInterval(() => {
			if (this.state.seconds === 0) {
				alert("TIMER DONE");
				clearInterval(this.myInterval);
			} else {
				this.setState(({ seconds }) => ({
					seconds: seconds - 1
				}));
			}
		}, 1000)
	}

	componentDidUpdate(){
		// if (this.props.resetTimer){
		// 	this.setState({
		// 		seconds:60
		// 	})
		// }
	}
	componentWillUnmount() {
		clearInterval(this.myInterval);
	}

	render() {
		return (
			<div>
				<h1>Time remaining {this.state.seconds}</h1>
			</div>
		);
	}
}
export default Timer;
