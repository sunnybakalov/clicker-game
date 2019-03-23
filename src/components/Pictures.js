import React from "react";
import sixers from "../images/sixers.png"
import blazers from "../images/blazers.png"
import bulls from "../images/bulls.png"
import cavs from "../images/cavs.png"
import jazz from "../images/jazz.png"
import lakers from "../images/lakers.png"
import magic from "../images/magic.png"
import nuggets from "../images/nuggets.png"
import pistons from "../images/pistons.png"
import sonics from "../images/sonics.png"
import suns from "../images/suns.png"
import warriors from "../images/warriors.png"

class Pictures extends React.Component {

    render() {
        return (

        <div className = "pictures">
            <div className = "row-md-12">
                <img src = {sixers} alt = "sixers"></img>
                <img src = {blazers} alt = "blazers"></img>
                <img src = {bulls} alt = "bulls"></img>
                <img src = {cavs} alt = "cavs"></img>
            </div>
            <div className = "row-md-12">
                <img src = {jazz} alt = "jazz"></img>
                <img src = {lakers} alt = "lakers"></img>
                <img src = {magic} alt = "magic"></img>
                <img src = {nuggets} alt = "nuggets"></img>
            </div>
            <div className = "row-md-12">
                <img src = {pistons} alt = "pistons"></img>
                <img src = {sonics} alt = "sonics"></img>
                <img src = {suns} alt = "suns"></img>
                <img src = {warriors} alt = "warriors"></img>
            </div>
        </div>

        );
    }
}

export default Pictures;