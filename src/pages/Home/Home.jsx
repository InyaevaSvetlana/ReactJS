import React, { Component } from 'react';
// import ReactDom from 'react-dom';
import MessageList from '@containers/MessageList';
import ChatList from '@containers/ChatList';
import MsgInput from '@components/MsgInput';
import { StylesProvider } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadUser } from '@actions/user';
import { loadChats } from '@actions/chats';
import { loadContacts } from '@actions/contacts';
import { loadMessages } from '@actions/messages';
import { getActiveChat } from '@actions/chats';

import './style.scss';

class Home extends Component {
    async componentDidMount() {
        await this.props.loadUser();
        await this.props.loadChats(this.props.user.id);
        await this.props.loadContacts(this.props.user.id);
    }

    render() {
        return <StylesProvider>
            <h1>Chat with { this.props.name }</h1>
                    <div className="app__wrapper">
                        <ChatList/>
                        { this.props.name && <MessageList active={ this.props.id }/> }
                    </div>
                </StylesProvider>;
    }
}

const mapState = ({ userReducer }) => ({
    user: userReducer.user
  });
  
  const mapActions = dispatch => bindActionCreators({ loadUser, loadChats, loadContacts, loadMessages, getActiveChat }, dispatch);
  
  export default connect(mapState, mapActions)(Home);