const Statistics = ({ good, neutral, bad, total=0, positiveFeedback=0 }) => {
    return (
        <div>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {positiveFeedback}</p>
        </div>
    )
};
export default Statistics;