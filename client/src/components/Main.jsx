import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
const Main = () => {

    const inputRef = useRef(null);

  return (
    <div className='container bg-dark'>
      <h1 className='title text-light'>Quiz Application</h1>
      <ol>
        <li>You will be asked 10 questions one after another.</li>
        <li>10 points will be awarded for the correct answer.</li>
        <li>Each question has three options. These are multiple choice questions.</li>
        <li>You can review and change answers before the quiz finishes.</li>
        <li>The result will be declared at the end of the quiz.</li>
      </ol>

      <form action="" id="form">
        <input ref={inputRef} type="text" placeholder='Username*' />
      </form>

      <div className="start">
        <Link className='btn btn-primary' to='quiz'>Start Quiz </Link>
      </div>
    </div>
  )
}

export default Main;
