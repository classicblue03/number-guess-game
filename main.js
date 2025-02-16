/*
    랜덤번호 지정
    유저가 번호를 입력한다
    go버튼을 클릭한다
    랜덤번호 < 유저번호 down
    랜덤번호 > 유저번호 up
    reset버튼을 누르면 게임 reset
    5번의 기회 소진 시 게임 끝 (버튼 disable)
    
    유저가 1-100 범위 밖의 숫자 입력시 알려주고, 기회를 차감하지 않는다
    유저가 이미 입력한 숫자 입력 시 알려주며, 기회를 차감하지 않는다
*/

let comNum = 0;
let playBtn = document.getElementById("play-btn")
let userInput = document.getElementById("user-input")
let resultArea = document.getElementById("result-area")

playBtn.addEventListener("click", play)

function picRandomNum(){
    // 랜덤한 숫자를 뽑을 수 있게 도와주는 함수 (0.1 등 소숫점 단위를 * 100을 해줌으로써 10의 단위로 변경됨)
    // comNum = Math.floor(Math.random() * 100); // 0-99
    comNum = Math.floor(Math.random() * 100) + 1; // 1-100
    console.log("정답",comNum);
}
function play(){
    let userValue = userInput.value // 유저가 입력한 값(value) 가져오기
    
    if(userValue < comNum) {
        resultArea.textContent = "Up"
        // console.log("Up");
    }else if(userValue > comNum) {
        resultArea.textContent = "Down"
        // console.log("Down");
    }else{
        resultArea.textContent = "정답입니다"
        // console.log("정답입니다")
    }
}

picRandomNum();