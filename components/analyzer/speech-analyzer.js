// var analyzeMe;
var totalWords
var wpm;
let cheer;
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
		var wpmhere = totalWords /0.50;
		return wpmhere;
	}

	results = () => {
		wpm = this.calculateWpm();
		
		var yourResult = "";
		
		if (wpm <= 80){
			cheer = "Speed up!"
			yourResult = "Your timing was a bit slow!";
		}
		else if ( wpm >= 80 && wpm <= 120){
			cheer= "Awesome Job!"
			yourResult = "Your timing was perfect!";
		}
		else if (  wpm > 120){
			cheer = "Slow down!"
			yourResult = "Your timing was too fast!";
		}
		return yourResult;
	}
 
	render(){
		return(
			<div>
				<h1 className = "cheer"> {cheer} </h1>
				<h1 className = "resultsWPM"> {wpm} </h1>
				<h3 className = "explanation"> {this.results()}</h3>

			</div>
		)
	}
}
export default SpeechAnalyzer