import React, { Component } from "react";
import { connect } from "dva";

class Cinema extends Component {
    componentDidMount() {
        if (this.props.list.length === 0) {
            // dispatch
            this.props.dispatch({
                type: "maizuo/getCinemaList",
            });
        } else {
            console.log("缓存", this.props.list);
        }
    }
    render() {
        return (
            <div>
                <ul>
                    {this.props.list.map((item) => (
                        <li key={item.filmId}>{item.name}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    list: state.maizuo.list,
});
export default connect(mapStateToProps)(Cinema);
