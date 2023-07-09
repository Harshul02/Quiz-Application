import React, {useState} from 'react'

const Question = () => {

    const [checked, setChecked] = useState(undefined);

    const onSelect = ()=>{
        setChecked(true);
        console.log('Logged Selected');
    }

  return (
    <div className='questions'>
      <h2 className='text-light'>Question 1</h2>

      <ul>
        <li>
            <input type="checkbox"  name='options' id='q1-option' onChange={onSelect}/>

            <label htmlFor="q1-option" className='text-light mx-3'>Option</label>
            <div className="check checked"></div>
        </li>
      </ul>
    </div>
  )
}

export default Question
