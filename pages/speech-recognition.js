import React, { Component } from "react";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";
import Timer from "../components/timer/timer";
import SpeechAnalyzer from "../components/analyzer/speech-analyzer";
import "../style/speech-rec.scss";

// import AudioRecorder from "../components/audio-recorder/audio-recorder";
const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  startListening: PropTypes.func,
  stopListening: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
};

class Dictaphone extends Component {
  state = {
    startTimer: false,
    resetTimer: false,
    startAnalyze: false,
    firstTime: 'START',
    stopRecogonizer: true,
    switchFirstScreen:0
  };

  handleStartTimer = () => {
    
    this.setState({
      // firsTime: '',
      startTimer: true,
      startAnalyze: false
    });
  };

  handleStopTimer = () => {
    this.setState({
      startTimer: false,
      startAnalyze: true
    });
  };

  handleResetTimer = () => {
    this.setState({
      resetTimer: true
    });
  };

  timerDoneCallback = (startTimer) =>{
    console.log( startTimer );
    this.setState({
      startTimer: startTimer
    });
  }
  onData(recordedBlob) {
    console.log("chunk of real-time data is: ", recordedBlob);
  }

  onStop(recordedBlob) {
    console.log("recordedBlob is: ", recordedBlob);
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
      if (this.state.firstTime === 0) {
        clearInterval(this.myInterval);
        
        this.setState({
          stopRecogonizer:false
        }, () => this.props.timerDoneCallback(this.state.stopRecogonizer));
        
      } else {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1
        }));
      }
    }, 1000)
  }

  switchSeparateScreen (){

    setTimeout( () => {
      this.setState( {
        switchFirstScreen: 1
      });
    }, 2000);

    setTimeout( () => {
      this.setState( {
        switchFirstScreen: 2
      });
    }, 7000);

    setTimeout( () => {
      this.setState( {
        switchFirstScreen: 3
      });
    }, 14000);

    setTimeout( () => {
      this.setState( {
        switchFirstScreen: 4
      });
    }, 21000);

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
        {!this.state.startTimer && <img className = "background-img" src ='../static/screens/iniCo.png'/>}
         <button
          onClick={() => {
            startListening(), this.handleStartTimer(), this.switchSeparateScreen();
          }}
          className = "startTimer"
        >
          {this.state.firstTime}
        </button>
        {this.state.startTimer && this.state.switchFirstScreen === 0 && <img className = "background-img" src ='../static/screens/2ndScreen.png'/>}
        {this.state.startTimer && this.state.switchFirstScreen === 1 && <img className = "background-img" src ='../static/screens/3rdScreen.png'/>}
        {this.state.startTimer && this.state.switchFirstScreen === 2 && <img className = "background-img" src ='../static/screens/4thScreen.png'/>}
        {this.state.startTimer && this.state.switchFirstScreen === 3 && <img className = "background-img" src ='../static/screens/5thScreen.png'/>}
        {this.state.startTimer && this.state.switchFirstScreen === 4 && <img className = "background-img" src ='../static/screens/6thScreen.png'/>}
        {this.state.startTimer && <Timer resetTimer={this.state.resetTimer} timerDoneCallback= {this.timerDoneCallback} />}
        <span className = "transcript-paragraph">{transcript}</span>
       
        <button
          onClick={() => {
            stopListening(), this.handleStopTimer();
          }}
        >
          Stop
        </button>
        <button
          onClick={() => {
            resetTranscript(), this.handleResetTimer();
          }}
        >
          Reset
        </button>
        {this.state.startAnalyze && <SpeechAnalyzer transcript={transcript} />}
      </div>
    );
  }
}

const options = {
  autoStart: false,
  continuous: true
};

export default SpeechRecognition(options)(Dictaphone);
