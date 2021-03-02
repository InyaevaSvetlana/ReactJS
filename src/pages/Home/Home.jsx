import React from 'react';
// import ReactDom from 'react-dom';
import MessageList from '@containers/MessageList';
import ChatList from '@containers/ChatList';
import MsgInput from '@components/MsgInput';
import { StylesProvider } from '@material-ui/core/styles';

import './style.scss';

export default props => {

    return <StylesProvider>
        <h1>Chat with { props.name }</h1>
                <div className="app__wrapper">
                    {/* <MsgInput /> */}
                    <ChatList />
                    <MessageList />
                </div>
            </StylesProvider>;
}