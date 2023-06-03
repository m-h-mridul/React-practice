import React from "react";
import Buttonuser from "./buttonuse.jsx"

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            local: props.local
        };
    }
    componentDidMount() {
        setInterval(() => this.tick(), 1000);
    }
    tick() {
        this.clocltimer = this.setState({
            date: new Date()
        });
    }
    componentWillUnmount(component) {
        clearInterval(this.clocltimer);
    }

    handleclick = (cheak) => {
        this.setState({
            local: cheak ,
        });
    }
    render() {
        const cheak = true;
        
        return (
            <div>
                <h1>
                    {this.state.date.toLocaleTimeString(this.state.local)}
                </h1>
                
                    <Buttonuser buttonclick={this.handleclick} peramater='en-Us'></Buttonuser> 
                    <Buttonuser buttonclick={this.handleclick} peramater='bn-BD'></Buttonuser>
                <br />

                <button onClick={() => this.handleclick('en-US')}>
                    {this.state.local === 'en-US' ? 'click here' : 'চাপুন '}
                </button>
                {/* <a href="../pages/catagories.jsx">go to next pages</a> */}
            </div>
        );
    }
}

export default Clock;