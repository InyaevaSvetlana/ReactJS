import React from 'react';
//import ReactDom from 'react-dom';

import MessageList from '@containers/MessageList';
import ChatsList from '@containers/ChatsList';
import MsgInput from '@components/MsgInput';

import './style.scss'

export default () => {

    return <div>
        { /*<MsgInput />*/ }
        <MessageList />
        <ChatsList />
    </div>;
}