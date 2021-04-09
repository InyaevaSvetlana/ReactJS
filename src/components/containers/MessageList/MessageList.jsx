import React, { Component } from 'react';

import './style.scss';
import Message from '@components/Message';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadMessages, sendMessage } from '@actions/messages';

class MessageList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    handleChange = evt => {
        if (evt.keyCode !== 13) {
            this.setState({ text: evt.target.value });
        } else {
            this.sendMessage();
        }
    };

    sendMessage = () => {
        const user = this.props.user.user.id;
        const chat = this.props.active;

        const payload = {
            name: 'Username',
            text: this.state.text,
            date: new Date()
        };

        this.props.send(payload, chat, user);
        
        this.setState({
            text: ''
        });
    };

    async componentDidMount() {
        await this.props.loadMessages(this.props.user.user.id, this.props.active);
    };

    render() {
        const { messages } = this.props;
        const Messages = messages ? messages.map((el, i) => 
            <Message 
                key={ 'msg_' + i } 
                name={ el.name } 
                text={ el.text }
            />) : <div></div> ;
        
        return <div className="message-list__wrapper">
            <div className="message-list__messages">
               { Messages } 
            </div>
            <div className="message-list__form">
                <input 
                    type="text"
                    value = { this.state.text }
                    onChange = { this.handleChange }
                    onKeyUp = { this.handleChange }
                />
                <button onClick={ this.sendMessage }>add</button>
            </div>
        </div>;

    };
};

const mapState = ({ messagesReducer, userReducer, chatsReducer }) => ({
    messages: messagesReducer.messages,
    user: userReducer,
    activeChat: chatsReducer.activeChat
});

const mapActions = dispatch => bindActionCreators({ send: sendMessage, loadMessages }, dispatch);

export default connect(mapState, mapActions)(MessageList);