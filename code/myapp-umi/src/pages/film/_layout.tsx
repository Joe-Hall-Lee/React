import React from 'react';
import { Redirect, useLocation } from 'umi';

export default function Film(props: any) {
    // if (判断是 /films) {
    //     return <Redirect to="/film/nowplaying" />;
    // }
    const location = useLocation();
    // console.log(location)
    if (location.pathname === '/film' || location.pathname === '/film/') {
        return <Redirect to="/film/nowplaying" />;
    }
    return <div>{props.children}</div>;
}
