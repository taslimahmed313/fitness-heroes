import React from 'react';
import './Question.css';

const Question = () => {
    return (
      <div>
        <div className="single-question">
          <p>How does React work ?</p>
          <p>
            <b>Answer : </b> ReactJS divides the UI into isolated reusable
            pieces of code known as components. React components work similarly
            to JavaScript functions as they accept arbitrary inputs called
            properties or props. It's possible to have as many components as
            necessary without cluttering your code.
          </p>
        </div>
        <div className="single-question">
          <p>What is the difference between prop and state in React?</p>
          <p>
            <b>Answer : </b>The useEffect Hook allows you to perform side
            effects in your components. Some examples of side effects are:
            fetching data, directly updating the DOM, also capable for
            unsubscribe by Returning a Function, run Again when a Value Changes,
            and timers. useEffect accepts two arguments. The second argument is
            optional.
          </p>
        </div>
        <div className="single-question">
          <p>How many uses useEffect in React?</p>
          <p>
            <b>Answer : </b> ReactJS divides the UI into isolated reusable
            pieces of code known as components. React components work similarly
            to JavaScript functions as they accept arbitrary inputs called
            properties or props. It's possible to have as many components as
            necessary without cluttering your code.
          </p>
        </div>
      </div>
    );
};

export default Question;