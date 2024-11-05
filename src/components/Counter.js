import React, {Component} from "react";

class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }
    increment(){
        // //async increment this take some time to complete, it displays the counter older values
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //     console.log("Callback Value: " + this.state.count)
        // })
        // console.log(this.state.count)
        // // this.state.count = this.state.count + 1;
        // console.log(this.state.count);
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
        console.log(this.state.count)
    }


    incrementFive(){

        //batch execution
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        
    }
    render(){
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={() => this.increment()}> Increment </button>
                <button onClick={() => this.incrementFive()}> Increment Five </button>
            </div>
            
        )
    }
}

export default Counter;