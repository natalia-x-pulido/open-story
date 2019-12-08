import React, { Component } from "react";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";
import Timer from "../components/timer/timer";
import SpeechAnalyzer from "../components/analyzer/speech-analyzer";

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  startListening: PropTypes.func,
  stopListening: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
};

class Dictaphone extends Component {
  
  state = 
  {
    startTimer: false,
    resetTimer: false,
    startAnalyze: false
  }

  handleStartTimer = () => {
    this.setState ({
      startTimer: true
    });
  }

  handleStopTimer = () => {
    this.setState ({
      startTimer: false
    });
  }

  handleResetTimer = () => {
    this.setState ({
      resetTimer: true
    });
  }

  handleStartAnalyze = () => {
     this.setState ({
      startAnalyze: true
    });
  }

  render() {
    const {
      transcript,
      resetTranscript,
      startListening,
      stopListening,
      browserSupportsSpeechRecognition
    } = this.props;

    if (!browserSupportsSpeechRecognition) {
      return null;
    }

    return (
      <div>
        <h1> Open Story</h1>
        {this.state.startTimer && <Timer resetTimer= {this.state.resetTimer} />}
        <button onClick={() => {startListening(), this.handleStartTimer()}}>Start</button>
        <button onClick={() => {stopListening(), this.handleStopTimer(), this.handleStartAnalyze()}}>Stop</button>
        <button onClick={() => {resetTranscript(), this.handleResetTimer()}}>Reset</button>
        {this.state.startAnalyze && <SpeechAnalyzer transcript= {this.transcript} />}
        <span>{transcript}</span>
      </div>
    );
  }
}

// const Dictaphone = ({
//   transcript,
//   resetTranscript,
//   startListening,
//   stopListening,
//   browserSupportsSpeechRecognition
// }) => {
//   if (!browserSupportsSpeechRecognition) {
//     return null;
//   }

//   return (
//     <div>
//       <h1> Open Story</h1>
//       <Timer />
//       <button onClick={startListening}>Start</button>
//       <button onClick={stopListening}>Stop</button>
//       <button onClick={resetTranscript}>Reset</button>
//       <span>{transcript}</span>
//     </div>
//   );
// };

const options = {
  autoStart: false,
  continuous: false
};

// Dictaphone.propTypes = propTypes;

export default SpeechRecognition(options)(Dictaphone);
