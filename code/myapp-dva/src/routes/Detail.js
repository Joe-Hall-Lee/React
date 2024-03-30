import { connect } from "dva";
import React, { Component } from "react";

class Detail extends Component {
    componentDidMount() {
        console.log(
            `接受上个页面传来的 id，利用此 id 取数据`,
            this.props.match.params.myid
        );

        // console.log(this.props);
        this.props.dispatch({
            type: "maizuo/hide",
        });
    }

    componentWillUnmount() {
        this.props.dispatch({
            type: "maizuo/show",
        });
    }
    render() {
        return <div>Detail</div>;
    }
}

export default connect()(Detail);
