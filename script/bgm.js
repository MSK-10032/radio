document.querySelector('body').innerHTML += `
<!-- BGM -->
<div id="cmsk_bgm" title="BGM">
    <div class="bgm_button bgm_play" onclick="cmsk_bgm()">
        <svg style="width: 50px; height: 50px; cursor: pointer" viewBox="0 0 24 24">
            <path d="M9 7l8 5-8 5z" fill="#000" />
        </svg>
    </div>
    <div class="bgm_button bgm_pause" onclick="cmsk_bgm()" style="display: none">
        <svg style="width: 50px; height: 50px; cursor: pointer" viewBox="0 0 24 24">
            <rect x="8" y="8" width="3" height="8" fill="#000" />
            <rect x="13" y="8" width="3" height="8" fill="#000" />
        </svg>
    </div>
    <style>
        #cmsk_bgm {
            position: fixed;
            z-index: 114;
            top: 2vw;
            left: 2vw;
            width: min-content;
            height: min-content;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0;
        }

        .bgm_button {
            display: flex;
            justify-content: center;
            align-items: center;
            width: min-content;
            height: min-content;
            border: 3px solid #000;
            background-color: #fff;
            justify-content: center;
            align-items: center;
            width: min-content;
            height: min-content;
            padding: 0;
        }
    </style>
    <audio src="https://cf-1.cdn.御坂网络.御坂美琴.cloudns.org/audio/only_my_railgun.m4a" autoplay loop onload></audio>
</div>
`;
const bgm = document.querySelector("#cmsk_bgm audio");
const playButton = document.querySelector("#cmsk_bgm .bgm_play");
const pauseButton = document.querySelector("#cmsk_bgm .bgm_pause");

bgm.play();

setInterval(() => {
    if (bgm.paused) {
        playButton.style.display = "";
        pauseButton.style.display = "none";
    } else {
        playButton.style.display = "none";
        pauseButton.style.display = "";
    }
})

function cmsk_bgm() {
    if (bgm.paused) {
        bgm.play();
    } else {
        bgm.pause();
    }
}