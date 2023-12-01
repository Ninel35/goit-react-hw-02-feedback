import { Component } from "react"


class FeedbackOptions extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    handlerClick = ({target:{name}}) => {

        this.setState((prevState) => {
            return {
                [name]: prevState[name] + 1,
           
            };
        });
        
    }

    render() {
        return (
            <div>
                <button className="good" type="button" name="good" onClick={this.handlerClick}>Good</button>
                <button className="neutral" type="button" name="neutral" onClick={this.handlerClick}>Neutral</button>
                <button className="bad" type="button" name="bad" onClick={this.handlerClick}>Bad</button>
                <div>
                    <p>Good: {this.state.good}</p>
                    <p>Neutral: {this.state.neutral}</p>
                    <p>Bad: {this.state.bad}</p>
                </div>
            </div>
        )
    }
}
export default FeedbackOptions;