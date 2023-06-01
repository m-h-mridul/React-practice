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

    handleclick =(local)=>  {
        this.setState({
            local: 'en-US'
        });
        // this.setState({
        //     local: local
        // });
    }
    render() {
        return (
            <div>
                <h1>
                    {this.state.date.toLocaleTimeString(this.state.local)}
                </h1>
                <Buttonuser buttonclick={this.handleclick} peramater='en-Us'></Buttonuser>
                <button onClick={()=>this.handleclick('en-US')}>
                    click here
                </button>
                {/* <a href="../pages/catagories.jsx">go to next pages</a> */}
            </div>
        );
    }
}

export default Clock;