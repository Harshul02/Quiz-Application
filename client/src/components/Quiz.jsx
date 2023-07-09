import React from 'react';
import Questions from './Question';


const Quiz = () => {


    const onNext = ()=>{
        console.log("On Next Click");
    }
    const onPrev = ()=>{
        console.log("On Prev Click");
    }

  return (
    <div className='container'>
      <h1 className='title text-light text-center p-3 my-3' style={{border: '5px solid #0cf36b'}}>Quiz Application</h1>

      <div className="d-flex justify-content-between">
        <button className='btn btn-info prev' onClick={onPrev}>Prev</button>
        <button className='btn btn-info next' onClick={onNext}>Next</button>
      </div>
    </div>
  )
}

export default Quiz
