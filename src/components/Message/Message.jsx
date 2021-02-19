import React from 'react';
// import ReactDom from 'react-dom';

import './style.scss';


export default props => {
    const { name, text } = props;

    return  <div className="message">
                <p ><b>{ name }</b></p>
                <p>{ text }</p>
            </div>;
}