import { Component } from 'react';
class Stats extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  goodButton = () => {
    this.setState({
      good: this.state.good + 1,
    });
  };

  neutralButton = () => {
    this.setState({
      neutral: this.state.neutral + 1,
    });
  };

  badButton = () => {
    this.setState({
      bad: this.state.bad + 1,
    });
  };

  countTotalFeedback = () => {
    let total = this.state.good + this.state.bad + this.state.neutral;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    let positivePercentage =
      (this.state.good / this.countTotalFeedback()) * 100;
    return positivePercentage;
  };

  render() {
    return (
      <>
        <h1>Please leave feedback</h1>
        <button onClick={this.goodButton}>Good</button>
        <button onClick={this.neutralButton}>Neutral</button>
        <button onClick={this.badButton}>Bad</button>
        <h1>Statistics</h1>
        <h2>Good: {this.state.good}</h2>
        <h2>Neutral: {this.state.neutral}</h2>
        <h2>Bad: {this.state.bad}</h2>
        <h2>Total: {this.countTotalFeedback()}</h2>
        <h2>Positive Feedback: {this.countPositiveFeedbackPercentage()}%</h2>
      </>
    );
  }
}

export default Stats;
