/*
    랜덤번호 지정
    유저가 번호를 입력한다
    go버튼을 클릭한다
    랜덤번호 < 유저번호 down
    랜덤번호 > 유저번호 up
    reset버튼을 누르면 게임 reset
    5번의 기회 소진 시 게임 끝 (버튼 disable)
    
    유저가 1-100 범위 밖의 숫자 입력시 알려주고, 기회를 차감하지 않는다
    유저가 이미 입력한 숫자 입력 시 알려주며, 기회를 차감하지 않는다 (유저가 이전에 입력한 숫자(history)를 알아야 한다)
*/

let comNum = 0;
let playBtn = document.getElementById("play-btn")
let userInput = document.getElementById("user-input")
let resultArea = document.getElementById("result-area")
let resetBtn = document.getElementById("reset-btn")
let chances = 3; // 남은기회
let gameOver = false
let chanceArea = document.getElementById("chance-area")
let comArea = document.getElementById("com-area") // 정답 보여주기
let history = []

playBtn.addEventListener("click", play);
resetBtn.addEventListener("click", reset);
// 숫자 입력 후, input태그에 focus 하면 값 비우기, 다른 곳에서는 쓰이지 않으므로, 익명함수로 처리함
userInput.addEventListener("focus", function(){userInput.value=""})

// 01
function picRandomNum(){
    // 랜덤한 숫자를 뽑을 수 있게 도와주는 함수 (0.1 등 소숫점 단위를 * 100을 해줌으로써 10의 단위로 변경됨)
    // comNum = Math.floor(Math.random() * 100); // 0-99
    comNum = Math.floor(Math.random() * 100) + 1; // 1-100
    // console.log("정답",comNum);
    comArea.textContent = `정답 : ${comNum}`
}
// 02
function play(){
    let userValue = userInput.value; // 유저가 입력한 값(value) 가져오기

    // 1. 유효성 검사 - 1-100 범위 밖의 숫자 입력시 알려주고, 기회를 차감하지 않는다
    if(userValue < 1 || userValue > 100) { 
        resultArea.textContent = "1과 100사이의 숫자를 입력해주세요"
        return; // 여기서 함수종료
    }

    // 2. 중복된 숫자 유효성 검사 - history에 이미 userValue (유저가 입력한 값)이 있다면
    if(history.includes(userValue)) {
        resultArea.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해주세요"
        return; // 여기서 함수종료
    }

    // 3. 위의 유효성 검사 이후에 실행되는 코드 
    chances --; // play버튼 누를때마다 기회는 1씩 줄어든다.
    chanceArea.textContent = `남은 기회 : ${chances}`;
    // console.log("기회는",chances+"번 남았습니다.")


    if(userValue < comNum) {
        resultArea.textContent = "Up"
        // console.log("Up");
    }else if(userValue > comNum) {
        resultArea.textContent = "Down"
        // console.log("Down");
    }else{
        resultArea.textContent = "정답입니다"
        // console.log("정답입니다")
        gameOver=true // 게임이 끝났을때
    }


    /*
        유저가 이미 입력한 숫자 입력 시 알려주며, 기회를 차감하지 않는다 
        즉, 유저가 이전에 입력한 숫자(history)를 알아야 한다.
    */
    history.push(userValue); // 배열 history에 유저가 이전에 입력한 숫자를 저장해야한다.
    console.log(history)

    if(chances < 1) {
        gameOver = true
    }

    if(gameOver == true) {
        playBtn.disabled = true // 게임종료시 playBtn는 비활성화 됨
    }
}
// 03
function reset(){
    userInput.value = ""; // userInput창이 비우기
    gameOver = false;
    history = []
    playBtn.disabled = false;
    chances = 3;
    chanceArea.textContent = `남은 기회 : ${chances}`;
    resultArea.textContent = "결과값 출력"
    picRandomNum(); // 새로운 번호
}
picRandomNum();