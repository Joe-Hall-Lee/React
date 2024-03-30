import React from 'react';
import { NavLink } from 'umi';
import './index.less';
export default function IndexLayout(props: any) {
    if (
        props.location.pathname === '/city' ||
        props.location.pathname.includes('/detail')
    ) {
        return <div>{props.children}</div>;
    }
    return (
        <div>
            IndexLayout
            {props.children}
            <ul>
                <li>
                    <NavLink to="/film" activeClassName="active">
                        film
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/cinema">cinema</NavLink>
                </li>
                <li>
                    <NavLink to="/center">center</NavLink>
                </li>
            </ul>
        </div>
    );
}
