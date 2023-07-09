import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
const Main = () => {

    const inputRef = useRef(null);

  return (
    <div className='container bg-dark'>
      <h1 className='title text-light text-center p-3 my-3' style={{border: '5px solid #0cf36b'}}>Quiz Application</h1>
      <ol className='text-light mt-5'>
        <li>You will be asked 10 questions one after another.</li>
        <li>10 points will be awarded for the correct answer.</li>
        <li>Each question has three options. These are multiple choice questions.</li>
        <li>You can review and change answers before the quiz finishes.</li>
        <li>The result will be declared at the end of the quiz.</li>
      </ol>

      <form action="" id="form" className='d-flex justify-content-center'>
        <input ref={inputRef} type="text" placeholder='Username*' className='form-control w-50 mt-5'/>
      </form>

      <div className="start d-flex justify-content-center">
        <Link className='btn btn-info text-center mt-3' to={'quiz'}>Start Quiz </Link>
      </div>
    </div>
  )
}

export default Main;
