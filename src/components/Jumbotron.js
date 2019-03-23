import React from "react";

class Jumbotron extends React.Component {


    render() {
        return (

            <div className = "jumbotron">
                <h1>Clicker Game</h1>
                <h5>Click on an image to earn points, but don't click on any more than once!</h5>
                <hr/>
                <span><strong> Score: 0 | Top Score: 0 </strong></span>
            </div>
        );
    }

}

export default Jumbotron;