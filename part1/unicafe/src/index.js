import React, { useState } from "react";
import ReactDOM from "react-dom";

const FeedbackControls = ({
  handleGoodClick,
  handleNeutralClick,
  handleBadClick
}) => (
  <div>
    <h1> Give Feedback </h1>
    <button onClick={handleGoodClick}> good </button>
    <button onClick={handleNeutralClick}> neutral </button>
    <button onClick={handleBadClick}> bad </button>
  </div>
);

const FeedbackStatistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <h1> Statistics </h1>
        No feedback given
      </div>
    );
  } else {
    return (
      <div>
        <h1> Statistics </h1>
        <div> good {good}</div>
        <div> neutral {neutral}</div>
        <div> bad {bad}</div>
        <div> all {total}</div>
        <div> avarage {(good - bad) / total}</div>
        <div> positive {(good / total) * 100} %</div>
      </div>
    );
  }
};

const App = props => {
  const [neutral, setNeutral] = useState(0);
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <FeedbackControls
        handleGoodClick={() => setGood(good + 1)}
        handleNeutralClick={() => setNeutral(neutral + 1)}
        handleBadClick={() => setBad(bad + 1)}
      />
      <FeedbackStatistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
