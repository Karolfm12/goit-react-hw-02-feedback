function ShowStatistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <h1>Statistics</h1>
      <h3>Good: {good}</h3>
      <h3>Neutral: {neutral}</h3>
      <h3>Bad: {bad}</h3>
      <h3>Total: {total}</h3>
      <h3>Positive Feedback: {positivePercentage}%</h3>
    </>
  );
}

export default ShowStatistics;
