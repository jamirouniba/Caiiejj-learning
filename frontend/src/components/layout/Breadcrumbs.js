import {Breadcrumb} from "semantic-ui-react";
import React from 'react';
import {Link} from "react-router-dom";

const queryString = require('query-string');
export default (props) => {
    const paths = props.location.pathname.split('/').map((p,i, arr) => {
            if (i === 0) return {
                key: i,
                content: (<Link to={'/'}>home</Link>),
                active: (i === arr.length - 1),
                link: (i < arr.length - 1)
            };

            if (i === arr.length - 1) return {
                key: i,
                content: p,
                active: (i === arr.length - 1)

            };

            return {
                key: i,
                content: (<Link to={`${arr.slice(0, i + 1).join('/')}`}>{p}</Link>),
                active: (i === arr.length - 1),
                link: (i < arr.length - 1)
            }
        }
    );
    return <Breadcrumb icon='chevron right' sections={paths}/>;
};