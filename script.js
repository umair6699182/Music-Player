
let aud1 = new Audio();
aud1.src = "audio/alan.mp3"

let aud2 = new Audio();
aud2.src = "audio/alanwalker.mp3"

let aud3 = new Audio();
aud3.src = "audio/Alone.mp3"

let aud4 = new Audio();
aud4.src = "audio/battle.mp3"

let aud5 = new Audio();
aud5.src = "audio/dark.mp3"

let aud6 = new Audio();
aud6.src = "audio/Letme.mp3"

let aud7 = new Audio();
aud7.src = "audio/Loveme.mp3"

let aud8 = new Audio();
aud8.src = "audio/Onmy.mp3"

let aud9 = new Audio();
aud9.src = "audio/Vaaste.mp3"


let song = document.querySelectorAll(".song");
for (let x of song) {


    console.log(x);

    x.addEventListener("click", playSong);
    x.addEventListener("dblclick", pauseSong);


}

function playSong() {
    var song = this.innerHTML;
    // console.log(song);
    switch (song) {

        case "a":
            aud1.play();
            break;

        case "b":
            aud2.play();
            break;

        case "c":
            aud9.play();
            break;

        case "d":
            aud4.play();
            break;

        case "e":
            aud5.play();
            break;

        case "f":
            aud6.play();
            break;

        case "g":
            aud7.play();
            break;

        case "h":
            aud8.play();
            break;

        case "i":
            aud3.play();
            break;

        default:
            console.log("wrong input");
            break;
    }
}
function pauseSong() {
    var songId = this.innerHTML;
    console.log(songId);

    switch (songId) {
        case "a":
            aud1.pause();
            break;

        case "b":
            aud2.pause();
            break;

        case "c":
            aud9.pause();
            break;

        case "d":
            aud4.pause();
            break;

        case "e":
            aud5.pause();
            break;

        case "f":
            aud6.pause();
            break;

        case "g":
            aud7.pause();
            break;

        case "h":
            aud8.pause();
            break;

        case "i":
            aud3.pause();
            break;

        default:
            console.log("wrong input");
            break;
    }
}

