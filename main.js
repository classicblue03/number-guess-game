// 
/* 
    랜덤번호 지정
    유저가 번호 입력 - go 버튼 클릭
    만약 유저가 랜덤번호를 맞추면 "맞췄습니다" 출력
    랜덤번호 < 유저번호 down
    랜덤번호 > 유저번호 up
    rest버튼클릭시 게임 리셋
    5번의 기회 소진시, 게임종료 (더이상 추측불가, 버튼이 disableed)

    유저가 1-100 범위 밖의 숫자 입력 시에 알려준다 (기회를 깎지 않는다.)
    유저가 이미 입력한 숫자 재입력 시 알려주며 기회를 깎지 않는다.
*/

let computerNum = 0
let playButton = document.getElementById("play-btn");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");

// console.log(playButton);
playButton.addEventListener("click", play) // play 함수 실행

function pickRandonNum(){
    computerNum = Math.floor(Math.random() * 100) + 1;
    console.log("정답", computerNum)
}

function play(){
    let userValue = userInput.value
    if(userValue < computerNum){
        resultArea.textContent = "UP"
        // console.log("UP")
    }else if (userValue > computerNum){
        resultArea.textContent = "Down"
        // console.log("Down")
    }else{
        resultArea.textContent = "정답입니다."
        // console.log("정답입니다.")
    }
    console.log(userValue)
    // console.log("게임시작")
}

pickRandonNum()