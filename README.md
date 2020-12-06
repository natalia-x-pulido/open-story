# open-story

Open Story was a project developed in MIT Hacking Arts 2019. The idea was an application that helps improve public speaking skills through storytelling. Users would improve their skills through daily interactive games. This is the Proof of concept we presented, involving slideshow karaoke, a fun mini game where the user creates a story based on the images they are showen and get feedback based on their speech rate. 

# Installation:

run npm install 

Then navigate onto localhost:3000/speech-recognition in your web browser.

# Technology used 

NextJS v9.1.4
React v16.12.0
React-speech-recognition v2.0.4

# How it works 

When the user presses the start button, the speech recognizer is started. As the user speaks, the speech recognizer uses natural language processing to convert the speech into text. This text is shown in real time by using a state variable. The pictures on the screen change every 5 seconds. Once the time is up, the transcript is analyzed in the speech-analyzer. Here we are using the words per minute to calculte the rate at which the user was speaking. If the user spoke between 80-120 words per minute, the timing was perfect. Otherwise, the user will receive a message saying they spoke to fast or too slow. 

We calculated this rate based on the average speaking rate values suggested on this site https://virtualspeech.com/blog/average-speaking-rate-words-per-minute#:~:text=According%20to%20the%20National%20Center,podcasters%2C%20the%20wpm%20is%20higher.


