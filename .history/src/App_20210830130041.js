import React, { useState } from "react";
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
  const [startPage, setStartPage] = useState(true);
  const [questionPage, setQuestionPage] = useState(false);
  const [resultPage, setResultPage] = useState("d-none");
  const [nextBtnDisable, setNextBtnDisable] = useState(true);
  const [hideNextBtn, setHideNextBtn] = useState("d-block");
  const [hideFinishBtn, setHideFinishBtn] = useState("d-none");
  const [choiceBtnDisable, setChoiceBtnDisable] = useState(false);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");
  const current_question = quiz[currentQuestionNumber];

  const bg_sound = new Howl({
    src: bgsound,
    loop: true,
  });

  Howler.volume(0.4);

  function pressStart() {
    bg_sound.play();

    setStartPage(false);
    setQuestionPage(true);
  }

  function checkAnswer(e) {
    const correctSound = new Howl({ src: correct });
    const wrongSound = new Howl({ src: wrong });

    let current_answer = quiz[currentQuestionNumber].ans;
    let choice = e.target.textContent;

    if (choice === current_answer) {
      correctSound.play();
      setScore(score + 10);
    } else {
      wrongSound.play();
    }

    if (currentQuestionNumber === quiz.length - 1) {
      setHideNextBtn("d-none");
      setHideFinishBtn("d-block");
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
    setQuestionPage(false);
    setResultPage("d-block");
    score > 0 ? setMessage("Congratulation!") : setMessage("Ohhhhh no!");
  }

  function replay() {
    Howler.stop();

    setStartPage(true);
    setResultPage("d-none");
    setCurrentQuestionNumber(0);
    setQuestionPage(false);
    setNextBtnDisable("true");
    setHideNextBtn("d-block");
    setHideFinishBtn("d-none");
    setScore(0);
    setMessage("");
    setChoiceBtnDisable(false);
  }

  return (
    <div className="App container px-md-2 px-lg-5 w-100 d-flex align-items-center">
      <div
        className={`container-fluid p-0 ${startPage ? "d-block" : "d-none"}`}
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
          Start
        </button>
      </div>
      <div className={`container-fluid p-0 ${(questionPage)}`}>
        <div className={"container-fluid p-0"}>
          <div className="container-fluid pt-5 pb-2 px-0 d-flex justify-content-between fs-5">
            <div className="container-fluid ps-0">
              <div>Question</div>
              <div>
                {currentQuestionNumber + 1}/{quiz.length}
              </div>
            </div>
            <div className="container-fluid pe-0 text-end">
              <div>Score</div>
              <div className="my-2">
                <span className="rounded-pill px-3 py-2 bg-light">{score}</span>
              </div>
            </div>
          </div>
          <RenderQuestion
            question={current_question.question}
            choices={current_question.choices}
            checkAnswer={checkAnswer}
            choiceBtnDisable={choiceBtnDisable}
          />
        </div>
        <div className="container-fluid d-flex justify-content-around my-5 px-lg-5">
          <button
            type="button"
            className={`${hideNextBtn} btn btn-primary px-3 px-sm-5 fs-5`}
            onClick={nextQuestion}
            disabled={nextBtnDisable}
          >
            &nbsp;Next&nbsp;
          </button>
          <button
            type="button"
            className={`${hideFinishBtn} btn btn-danger px-3 px-sm-5 fs-5`}
            onClick={showResultPage}
          >
            Finish
          </button>
        </div>
      </div>
      <div className={`container-fluid p-0 ${resultPage}`}>
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
