import React from "react";

class Pictures extends React.Component {


    render() {
        return (

            <div className = "everything">
                <div className = "jumbotron">
                <h1>Clicker Game</h1>
                <h5>Click on an image to earn points, but don't click on any more than once!</h5>
                <hr></hr>
                <span><strong>Score: 0 | Top Score: 0</strong></span>
                </div>
                <div className = "container">
                </div>
                <div className = "footer">
                <p>Copyright 2019</p>
                </div>
            </div>
        );
    }

}

export default Pictures;