import Notification from "components/Notification/Notification";

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
    return total===0 ? <Notification message="There is no feedback"/> : (
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