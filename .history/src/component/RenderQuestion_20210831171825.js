export default function RenderQuestion({ question, choices, checkAnswer, choiceBtnDisable}) {
 
    return (<>
        <div className='App-question-area d-flex align-items-center justify-content-center mb-3 px-lg-5'>
            <p className='h3'>{question}</p>
        </div>
        <div className='container-fluid'>
            <div className='row row-cols-1 row-cols-md-2 g-3 g-lg-4'>
                <div className='col d-flex justify-content-center'>
                    <button type='button' className= 'btn btn-warning py-3 w-100 fs-3 mx-md-5 rounded-pill text-dark' onClick={checkAnswer} disabled={choiceBtnDisable}>{choices[0]}</button>
                </div>
                <div className='col d-flex justify-content-center'>
                    <button type='button' className= 'btn btn-warning py-3 w-100 fs-3 mx-md-5 rounded-pill text-dark' onClick={checkAnswer} disabled={choiceBtnDisable}>{choices[1]}</button>
                </div>
                <div className='col d-flex justify-content-center'>
                    <button type='button' className= 'btn btn-warning py-3 w-100 fs-3 mx-md-5 rounded-pill text-dark' onClick={checkAnswer} disabled={choiceBtnDisable}>{choices[2]}</button>
                </div>
                <div className='col d-flex justify-content-center'>
                    <button type='button' className= 'btn btn-warning py-3 w-100 fs-3 mx-md-5 rounded-pill text-dark' onClick={checkAnswer} disabled={choiceBtnDisable}>{choices[3]}</button>
                </div>
            </div>
        </div>
    </>)
}
