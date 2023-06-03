import React from "react";
import Buttonuser from "./buttonuse.jsx"


class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            local: props.local,
            buttonName: true,
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

    handleclick = (value) => {
        this.state.buttonName=!this.state.buttonName;
        if (this.state.buttonName){
            this.setState({
                local: 'bn-BD',
                
            });
        }
        else{
            this.setState({
                local: 'en-US',
                
            });
        }
        
        
    }
    render() {
        return (
            <div>
                <h1>
                    {this.state.date.toLocaleTimeString(this.state.local)}
                </h1>
                {/* <Buttonuser buttonclick={this.handleclick} peramater='en-Us'></Buttonuser> 
                    <Buttonuser buttonclick={this.handleclick} peramater='bn-BD'></Buttonuser>
                <br /> */}

                <button onClick={() => this.handleclick('en-US')}>
                    {this.state.buttonName ? "bangla" : "English"}
                    {/* bangla */}
                </button>
            </div>
        );
    }
}

export default Clock;