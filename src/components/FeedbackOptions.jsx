function FeedbackOptions({ options }) {
  return (
    <>
      <button onClick={() => options('good')}>Good</button>
      <button onClick={() => options('neutral')}>Neutral</button>
      <button onClick={() => options('bad')}>Bad</button>
    </>
  );
}

export default FeedbackOptions;
