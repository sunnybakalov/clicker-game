import React from "react";

class Pictures extends React.Component {

    render() {
        return (

        <div className = "pictures">
            <div className = "row">
            {
                this.props.picturesData.map((picture) => {
                    return <div className="col-md-3" key={picture.id}>
                        <img
                        src={picture.img}
                        alt="b-ball"
                        onClick={() => {
                            this.props.handleClick(picture.id)
                        }}>
                        </img>
                    </div>
                })
            }
            </div>
        </div>

        );
    }
}

export default Pictures;