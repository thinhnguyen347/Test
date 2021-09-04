export default function RenderQuestion({
  clickedChoice,
  currentAnswer,
  question,
  choices,
  checkAnswer,
  choiceBtnDisable,
}) {
  return (
    <>
      <div className="App-question-area d-flex align-items-center justify-content-center mb-3 px-lg-5">
        <p className="h3">{question}</p>
      </div>
      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-md-2 g-3 g-lg-4">
          <div className="col d-flex justify-content-center">
            <button
              type="button"
              className={`btn btn-warning ${
                currentAnswer === choices[0]
                  ? "correct opacity-100"
                  : clickedChoice === choices[0]
                  ? "wrong opacity-100"
                  : ""
              } py-3 w-100 fs-3 mx-md-5 rounded-pill text-dark`}
              onClick={checkAnswer}
              disabled={choiceBtnDisable}
              value={choices[0]}
            >
              {choices[0]}
            </button>
          </div>
          <div className="col d-flex justify-content-center">
            <button
              type="button"
              className={`btn btn-warning ${
                currentAnswer === choices[1]
                  ? "correct opacity-100"
                  : clickedChoice === choices[1]
                  ? "wrong opacity-100"
                  : ""
              } py-3 w-100 fs-3 mx-md-5 rounded-pill text-dark`}
              onClick={checkAnswer}
              disabled={choiceBtnDisable}
              value={choices[1]}
            >
              {choices[1]}
            </button>
          </div>
          <div className="col d-flex justify-content-center">
            <button
              type="button"
              className={`btn btn-warning ${
                currentAnswer === choices[2]
                  ? "correct opacity-100"
                  : clickedChoice === choices[2]
                  ? "wrong opacity-100"
                  : ""
              } py-3 w-100 fs-3 mx-md-5 rounded-pill text-dark`}
              onClick={checkAnswer}
              disabled={choiceBtnDisable}
              value={choices[2]}
            >
              {choices[2]}
            </button>
          </div>
          <div className="col d-flex justify-content-center">
            <button
              type="button"
              className={`btn btn-warning ${
                currentAnswer === choices[3]
                  ? "correct opacity-100"
                  : clickedChoice === choices[3]
                  ? "wrong opacity-100"
                  : ""
              } py-3 w-100 fs-3 mx-md-3 mx-lg-5 rounded-pill text-dark`}
              onClick={checkAnswer}
              disabled={choiceBtnDisable}
              value={choices[3]}
            >
              {choices[3]}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
