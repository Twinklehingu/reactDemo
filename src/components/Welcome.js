import React, {Component} from "react";
// const Welcome = (props) => {
//     return (
//         <div>
//             <h1> Welcome {props.name}</h1>
//         </div>
//     )

//     // return React.CreateElement("div", null, React.createElement("h1", null, "WelcomeJohn"));
// }

class Welcome extends Component {
    render() {
    return (
        <div>
            <h1> Welcome {this.props.name} Price = {this.props.price}</h1>
        </div>
    )

    // return React.CreateElement("div", null, React.createElement("h1", null, "WelcomeJohn"));
    }
}
export default Welcome;