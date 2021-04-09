import React from 'react';

import './style.scss';

export default props => {
    const { name, text } = props;

    return  <div>
                <p><b>{ name }</b></p>
                <p>{ text }</p>
            </div>;
}