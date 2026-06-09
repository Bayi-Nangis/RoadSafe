const trafficSigns =[
{
    filename: "Assets/Traffic_Signs/image 8.png",
    correctText: "Stop completely",
    wrongText: "Go slowly",
    correctSide: "left",
    videoName: "https://www.youtube.com/embed/b9-HaLi4eYI?si=cp3zu5pUZS3rmLzZ",
    question: "Assets/Simulation/redlight_img.png",
    rightAnswer: "Assets/Simulation/red light gif.gif",
    wrongAnswer: "Assets/Simulation/roundabout-salah.gif",
},
{
    filename: "Assets/Traffic_Signs/image 12 (1).png",
    correctText: "Go",
    wrongText: "Stop Completely",
    correctSide: "right",
    videoName: "https://www.youtube.com/embed/MFhxhKEuyh0?si=4zbxhzZthIWjt4DM",
    question: "Assets/Simulation/greenlight_img.png",
    rightAnswer: "Assets/Simulation/greenlight gif.gif",
    wrongAnswer: "Assets/Simulation/roundabout-salah.gif",
},
{
    filename: "Assets/Traffic_Signs/image 10.png",
    correctText: "No Entry",
    wrongText: "No Parking",
    correctSide: "left",
    videoName: "https://www.youtube.com/embed/gL2DuDt5zNU?si=d6JrDWwh3qGRm0Cv",
    question: "Assets/Simulation/noentry_img.png",
    rightAnswer: "Assets/Simulation/noentry_gif.gif",
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
{
    filename: "Assets/Traffic_Signs/image 10 (1).png",
    correctText: "Prepare to merge",
    wrongText: "Only for one lane",
    correctSide: "left",
    videoName: "https://www.youtube.com/embed/_DCxwiJqeZU?si=zQD9f0RoSn5a10UG",
    question: "Assets/Simulation/narrowroad_img.png",
    rightAnswer: "Assets/Simulation/narrowroad_gif.gif",
    wrongAnswer: "Assets/Simulation/roundabout-salah.gif",
},
{
    filename: "Assets/Traffic_Signs/image 14.png",
    correctText: "Set distance by 60 meters between vehicles",
    wrongText: "60 km/h speed limit",
    correctSide: "right",
    videoName: "https://www.youtube.com/embed/NC7lpxg0lpc?si=RfrhLnZnFdWB6z3C",
    question: "Assets/Simulation/60mdistance_img.png",
    rightAnswer: "Assets/Simulation/60mdistance_gif.gif",
    wrongAnswer: "Assets/Simulation/roundabout-salah.gif",
},
{
    filename: "Assets/Traffic_Signs/image 17.png",
    correctText: "Don't use the buslane",
    wrongText: "Use the buslane",
    correctSide: "left",
    videoName: "https://www.youtube.com/embed/r9gjML9d7kk?si=t9lcTFDPuNeT7ZIF",
    question: "Assets/Simulation/buslane_img.png",
    rightAnswer: "Assets/Simulation/buslane_gif.gif",
    wrongAnswer: "Assets/Simulation/roundabout-salah.gif",
},
{
    filename: "Assets/Traffic_Signs/image 16.png",
    correctText: "Drive at 75 km/h",
    wrongText: "Drive at 90 km/h",
    correctSide: "right",
    videoName: "https://www.youtube.com/embed/04-J4_dfXxU?si=dcbmrtVcBWWk6sV6",
    question: "Assets/Simulation/max80kmh_img.png",
    rightAnswer: "Assets/Simulation/max80kmh_gif.gif",
    wrongAnswer: "Assets/Simulation/roundabout-salah.gif",
},
{
    filename: "Assets/Traffic_Signs/image 15.png",
    correctText: "Allowed to do a U-Turn",
    wrongText: "Don't do a U-Turn",
    correctSide: "left",
    videoName: "https://www.youtube.com/embed/Z8yVAPa6DhU?si=FK8_o-psVC7FZ9SP",
    question: "Assets/Simulation/uturn_img.png",
    rightAnswer: "Assets/Simulation/uturn_gif.gif",
    wrongAnswer: "Assets/Simulation/roundabout-salah.gif",
},
{
    filename: "Assets/Traffic_Signs/image 15.png",
    correctText: "Allowed to do a U-Turn",
    wrongText: "Don't do a U-Turn",
    correctSide: "right",
    videoName: "https://www.youtube.com/embed/Z8yVAPa6DhU?si=FK8_o-psVC7FZ9SP",
    question: "Assets/Simulation/nostop_img.png",
    rightAnswer: "Assets/Simulation/uturn_gif.gif",
    wrongAnswer: "Assets/Simulation/roundabout-salah.gif",
},
{
    filename: "Assets/Traffic_Signs/image 13.png",
    correctText: "Keep Going and Don't Stop",
    wrongText: "Don't do an serpentine",
    correctSide: "left",
    videoName: "https://www.youtube.com/embed/n5xt9tZ1mkA?si=5lLecPTYEqBsnX77",
    question: "Assets/Simulation/nostop_img.png",
    rightAnswer: "Assets/Simulation/nostop_gif.gif",
    wrongAnswer: "Assets/Simulation/roundabout-salah.gif",
},
{
    filename: "Assets/Traffic_Signs/image 11 (1).png",
    correctText: "60 km/h speed limit",
    wrongText: "Set distance by 60 meters between vehicles",
    correctSide: "right",
    videoName: "https://www.youtube.com/embed/Z8yVAPa6DhU?si=FK8_o-psVC7FZ9SP",
    question: "Assets/Simulation/60kmh_img.png",
    rightAnswer: "Assets/Simulation/60kmh_gif.gif",
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