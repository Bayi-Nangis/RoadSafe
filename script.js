const trafficSigns =[
{
    filename: "Assets/Traffic_Signs/image 8.png",
    correctText: "Stop completely",
    wrongText: "Go slowly",
    correctSide: "left",
    videoName: "https://www.youtube.com/embed/b9-HaLi4eYI?si=cp3zu5pUZS3rmLzZ",
    question: "Assets/Simulation/roundabout-img.png",
    rightAnswer: "Assets/Simulation/roundabout-benar.gif",
    wrongAnswer: "Assets/Simulation/roundabout-salah.gif",
},
{
    filename: "Assets/Traffic_Signs/image 12.png",
    correctText: "Proceed With Caution",
    wrongText: "Go",
    correctSide: "right",
    videoName: "https://www.youtube.com/embed/XOLxgtc1Ffg?si=tgtit2uc9wVsbKUZ",
    question: "Assets/Simulation/roundabout-img.png",
    rightAnswer: "Assets/Simulation/roundabout-benar.gif",
    wrongAnswer: "Assets/Simulation/roundabout-salah.gif",
},
{
    filename: "Assets/Traffic_Signs/image 12 (1).png",
    correctText: "Go",
    wrongText: "Stop Completely",
    correctSide: "right",
    videoName: "https://www.youtube.com/embed/MFhxhKEuyh0?si=4zbxhzZthIWjt4DM",
    question: "Assets/Simulation/roundabout-img.png",
    rightAnswer: "Assets/Simulation/roundabout-benar.gif",
    wrongAnswer: "Assets/Simulation/roundabout-salah.gif",
},
{
    filename: "Assets/Traffic_Signs/image 10.png",
    correctText: "No Entry",
    wrongText: "No Parking",
    correctSide: "right",
    videoName: "https://www.youtube.com/embed/gL2DuDt5zNU?si=d6JrDWwh3qGRm0Cv",
    question: "Assets/Simulation/roundabout-img.png",
    rightAnswer: "Assets/Simulation/roundabout-benar.gif",
    wrongAnswer: "Assets/Simulation/roundabout-salah.gif",
},
{
    filename: "Assets/Traffic_Signs/image 11.png",
    correctText: "Follow the Roundabout Direction",
    wrongText: "Loop through the roundabout",
    correctSide: "right",
    videoName: "https://www.youtube.com/embed/46mOPz3rhHs?si=MP0sY9W1ikmpgEH_",
    question: "Assets/Simulation/roundabout-img.png",
    rightAnswer: "Assets/Simulation/roundabout-benar.gif",
    wrongAnswer: "Assets/Simulation/roundabout-salah.gif",
},
]

const questionImage = document.getElementById("pertanyaan");
const signImage = document.getElementById("sign-image");
const leftButton = document.getElementById("left-button");
const rightButton = document.getElementById("right-button");
const youtubeVideo = document.getElementById("youtube-video");

const correctAudio = new Audio("Assets/Simulation/correct-sound.mp3");
const incorrectAudio = new Audio("Assets/Simulation/incorrect-sound.mp3");
let currentSign = null;

function newRound(){
    console.log("Starting new round");

    leftButton.disabled = false;
    rightButton.disabled = false;
    const randomIndex = Math.floor(Math.random() * trafficSigns.length);
    currentSign = trafficSigns[randomIndex];
    signImage.src = currentSign.filename;
    questionImage.src = currentSign.question;
    youtubeVideo.src = currentSign.videoName;
    leftButton.textContent = currentSign.correctSide === "left" ? currentSign.correctText : currentSign.wrongText;
    rightButton.textContent = currentSign.correctSide === "right" ? currentSign.correctText : currentSign.wrongText;
}

function checkAnswer(clickedButton){
    console.log("Button clicked: " + clickedButton);
    leftButton.disabled = true;
    rightButton.disabled = true;
    if(clickedButton === currentSign.correctSide){
        questionImage.src = currentSign.rightAnswer;
        correctAudio.currentTime = 0;
        correctAudio.play().catch(error => {
            console.log("Audio playback blocked or failed:", error);
        });
    } else{
        questionImage.src = currentSign.wrongAnswer;
        incorrectAudio.currentTime = 0;
        incorrectAudio.play().catch(error => {
            console.log("Audio playback blocked or failed:", error);
        });
    }
    setTimeout(function() {
        newRound();
    }, 2000); 
}

window.onload  = function(){
    newRound();
}