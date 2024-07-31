import { useState } from 'react';

const messages = [
  'Learn React ⚛️',
  'Be happy because you know React 👍',
  'Apply it in your job and dazzle everyone with your awesome skills ✨',
];

export const App = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = () => {
    if (step > 1) {
      setStep((currentStep) => currentStep - 1);
    }
  };

  const handleNext = () => {
    if (step < 3) {
      setStep((currentStep) => currentStep + 1);
    }
  };

  return (
    <>
      <button
        className='close'
        onClick={() => setIsOpen(!isOpen)}
        // -> if isOpen is true: becomes false, if isOpen is false: becomes true
      >
        &times;
      </button>

      {isOpen && (
        <div className='steps'>
          <div className='numbers'>
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>
          <p className='message'>
            Step {step}: {messages[step - 1]}
          </p>
          <div className='buttons'>
            <button
              style={{ backgroundColor: '#7950f2', color: '#fff' }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: '#7950f2', color: '#fff' }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};

// -------------------------------------------------------------
// UPDATING STATES
// -------------------------------------------------------------
// Use a callback function instead of a set value for the state (e.g. 'step').
// Why: You can update state multiple times in one function, because the value of the state gets updated in between.
// Syntax:
// -- Instead of: setStep(step - 1)
// -- Use an arrow function: setStep((currentStep) => currentStep - 1)

// -------------------------------------------------------------
// React's declarative approach
// -------------------------------------------------------------
// - Each component manages its own state, no matter how many time it is rendered.
// - React is ultimately a library that changes state over time.
// - Declarative approach to UI - reflection of data changing over time, using state, event handlers and JSX.

// -------------------------------------------------------------
// Practical guidelines for state
// -------------------------------------------------------------
// 1. Use state variable for any data that component should keep track of over time. In vanilla JS, it would be let, or [], {}
// 2. Use state variable for anything you want to be dynamic (e.g. modal is open or closed)
// 3. Use state variable to change the way a component looks (event handler function)
// 4. When building a component, imagine its view as a reflection of state changing over time
// 5. DON'T use state for variables that should NOT trigger a re-render. This causes unnecessary rerenders and thus performance issues. For these variables, just use regular variables with const

// -------------------------------------------------------------
// Comparison with vanilla js - see vanilla.html
// -------------------------------------------------------------
// - JS can be seen as imperative DOM manipulation; script set separately from HTML; DOM manipulation. We don't tell React what to do, like we do with JS.
