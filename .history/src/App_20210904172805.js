import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import logo from "./component/textnote.gif";
import { Howl, Howler } from "howler";
import bgsound from "./component/audio/bgsound.ogg";
import correct from "./component/audio/correct.ogg";
import wrong from "./component/audio/wrong.ogg";
import RenderQuestion from "./component/RenderQuestion";
import { quiz } from "./component/mockdata";

function App() {
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [startPageShow, setStartPageShow] = useState(true);
  const [questionPageShow, setQuestionPageShow] = useState(false);
  const [resultPageShow, setResultPageShow] = useState(false);
  const [nextBtnDisable, setNextBtnDisable] = useState(true);
  const [hideNextBtn, setHideNextBtn] = useState(false);
  const [hideFinishBtn, setHideFinishBtn] = useState(true);
  const [choiceBtnDisable, setChoiceBtnDisable] = useState(false);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [clickedChoice, setClickedChoice] = useState("");
  const [count, setCount] = useState(5);

  const current_question = quiz[currentQuestionNumber];
  const timerRef = useRef();
  const countdown = useRef();

  useEffect(() => {
    if (questionPageShow) {
      timerRef.current = setTimeout(() => {
        if (currentQuestionNumber === quiz.length - 1) {
          showResultPage();
        }
        nextQuestion();
        setCount(5);
      }, 5000);

      countdown.current = setInterval(() => {
        setCount(prevCount> => prevCount - 1);
      }, 1000);
    }

    return () => {
      clearTimeout(timerRef.current);
      clearInterval(countdown.current);

    };
  });

  
  function pressStart() {
    const bg_sound = new Howl({
      src: bgsound,
      loop: true,
    });
    bg_sound.play();

    setCurrentQuestionNumber(0);
    setStartPageShow(false);
    setQuestionPageShow(true);
  }

  function checkAnswer(e) {
    const correctSound = new Howl({ src: correct, volume: 0.3 });
    const wrongSound = new Howl({ src: wrong, volume: 0.2 });

    let current_answer = quiz[currentQuestionNumber].ans;
    let choice = e.target.value;

    clearTimeout(timerRef.current);

    if (choice === current_answer) {
      correctSound.play();
      setScore(score + 10);
      setCurrentAnswer(current_answer);
    } else {
      wrongSound.play();
      setClickedChoice(choice);
    }

    if (currentQuestionNumber === quiz.length - 1) {
      setHideNextBtn(true);
      setHideFinishBtn(false);
    }

    setChoiceBtnDisable(true);
    setNextBtnDisable(false);
  }

  function nextQuestion() {
    if (currentQuestionNumber < quiz.length - 1) {
      setCurrentQuestionNumber(currentQuestionNumber + 1);
      setChoiceBtnDisable(false);
    }

    setNextBtnDisable(true);
  }

  function showResultPage() {
    clearTimeout(timerRef.current);

    setQuestionPageShow(false);
    setResultPageShow(true);

    score > 0 ? setMessage("Congratulation!") : setMessage("Ohhhhh no!");
  }

  function replay() {
    Howler.stop();

    setStartPageShow(true);
    setResultPageShow(false);
    setQuestionPageShow(false);
    setNextBtnDisable(false);
    setHideNextBtn(false);
    setHideFinishBtn(true);
    setScore(0);
    setMessage("");
    setChoiceBtnDisable(false);
    setCurrentAnswer("");
    setClickedChoice("");
  }

  Howler.volume(0.1);

  return (
    <div className="App container px-md-2 px-lg-5 w-100 d-flex align-items-center">
      <div
        className={`container-fluid p-0 ${
          startPageShow ? "d-block" : "d-none"
        }`}
      >
        <img
          src={logo}
          className="img-fluid d-block mx-auto pb-5"
          alt="logo"
          width="360px"
        />
        <button
          type="button"
          className="App-start-btn btn btn-warning btn-lg d-block mx-auto py-3 px-5 fs-3"
          onClick={pressStart}
        >
          Bắt đầu
        </button>
      </div>
      <div
        className={`container-fluid p-0 ${
          questionPageShow ? "d-block" : "d-none"
        }`}
      >
        <div className={"container-fluid p-0"}>
          <div className="container-fluid pt-5 pb-2 px-0 d-flex justify-content-between fs-5">
            <div className="container-fluid ps-0">
              <div>Câu</div>
              <div>
                {currentQuestionNumber + 1}/{quiz.length}
              </div>
            </div>
            <div className="container-fluid text-center">
              <div className="fs-6">Countdown</div>
              <div className="my-2">
                <span className="px-3 py-2">{count}</span>
              </div>
            </div>
            <div className="container-fluid pe-0 text-end">
              <div>Điểm</div>
              <div className="my-2">
                <span className="rounded-pill px-3 py-2 bg-light">{score}</span>
              </div>
            </div>
          </div>
          <RenderQuestion
            clickedChoice={clickedChoice}
            currentAnswer={currentAnswer}
            question={current_question.question}
            choices={current_question.choices}
            checkAnswer={checkAnswer}
            choiceBtnDisable={choiceBtnDisable}
          />
        </div>
        <div className="container-fluid d-flex justify-content-around my-5 px-lg-5">
          <button
            type="button"
            className={`${
              hideNextBtn ? "d-none" : "d-block"
            } btn btn-primary px-3 px-sm-5 fs-5`}
            onClick={nextQuestion}
            disabled={nextBtnDisable}
          >
            Tiếp tục
          </button>
          <button
            type="button"
            className={`${
              hideFinishBtn ? "d-none" : "d-block"
            } btn btn-danger px-3 px-sm-5 fs-5`}
            onClick={showResultPage}
          >
            Kết thúc
          </button>
        </div>
      </div>
      <div
        className={`container-fluid p-0 ${
          resultPageShow ? "d-block" : "d-none"
        }`}
      >
        <img
          src={logo}
          className="img-fluid d-block mx-auto pb-5"
          alt="logo"
          width="360px"
        />
        <p className="h2 text-center">{message}</p>
        <p className="h3 text-center">
          You've got <span className="text-success">{score}</span> points
        </p>
        <button
          type="button"
          className="App-start-btn btn btn-danger btn-lg d-block mx-auto py-2 px-4 fs-3 mt-5"
          onClick={replay}
        >
          Replay
        </button>
      </div>
    </div>
  );
}

export default App;
