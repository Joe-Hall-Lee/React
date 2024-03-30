import { withRouter } from "dva/router";
import React, { Component } from "react";
import request from "../utils/request";

export default class Center extends Component {
    render() {
        return (
            <div>
                Center
                <WithChild />
            </div>
        );
    }
}

class Child extends Component {
    componentDidMount() {
        request(
            "/rest/cbc/portalsearchcorrectorservice/v1/hot-words?appId=com.huaweicloud.portal.search.high&type=PC&language=zh-cn"
        ).then((res) => {
            console.log(res);
        });

        request("/users").then((res) => {
            console.log(res.data);
        });
    }
    render() {
        return (
            <div>
                <button
                    onClick={() => {
                        console.log(this.props);
                        localStorage.removeItem("token");
                        this.props.history.push("/login");
                    }}
                >
                    退出登录
                </button>
            </div>
        );
    }
}

const WithChild = withRouter(Child);
