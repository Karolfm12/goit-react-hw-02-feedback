import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import ShowStatistics from './ShowStatistics';
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
    return positivePercentage.toFixed(0);
  };

  optBtns = type => {
    switch (type) {
      case 'good':
        this.goodButton();
        break;
      case 'neutral':
        this.neutralButton();
        break;
      case 'bad':
        this.badButton();
        break;
      default:
        console.log('warn');
    }
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title="Please leave Feedback" />
        <FeedbackOptions options={this.optBtns} />
        {total > 0 && (
          <ShowStatistics
            good={good}
            bad={bad}
            neutral={neutral}
            total={total}
            positivePercentage={positivePercentage}
          ></ShowStatistics>
        )}
      </>
    );
  }
}

export default Stats;
