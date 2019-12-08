// var analyzeMe;
var totalWords
class SpeechAnalyzer extends React.Component {
	
	componentDidMount() {
		// this.calculateWpm();
	}

	countWords(str){
	  return str.trim().split(/\s+/).length;
	}

	// parse the string to calculate how many words
	calculateWpm = () => {
		totalWords = this. countWords(this.props.transcript);
		
		// Speaking rate (wpm) = total words / number of minutes
		var wpm = totalWords /0.25;
		return wpm;
	}

	results = () => {
		let wpm = this.calculateWpm();
		
		var yourResult = "";
		
		if (wpm <= 80){
			yourResult = "Your speaking rate is " + wpm + " .You should speed up a little to improve your comprehension.";
		}
		else if ( wpm >= 80 && wpm <= 100){
			yourResult = "Your speaking rate is " + wpm + " .You're speaking rate is PERFECT! KEEP UP THE GREAT WORK!";
		}
		else if (  wpm > 120){
			yourResult = "Your speaking rate is " + wpm + " .You are speaking too fast! Try to slow down";
		}
		
		return yourResult;
	}
 
	render(){
		return(
			<div>
				<h1> {this.results()}</h1>
			</div>
		)
	}
}
export default SpeechAnalyzer