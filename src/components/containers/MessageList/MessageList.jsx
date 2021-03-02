import React, { Component } from 'react';
// import ReactDom from 'react-dom';

import './style.scss';
import Message from '@components/Message';
//stateFull


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadMessages } from '@actions/messages';

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
        this.setState({
            text: '',
            messages: [...this.state.messages, 
            {
                name: 'User',
                text: this.state.text
            }]
        });
    };

    componentDidUpdate() {
        // console.log('Отправлено');
    };

    render() {
        console.log(this.props.load());
        const { messages } = this.props;
        const Messages = messages.map((el, i) => 
            <Message 
                key={ 'msg_' + i } 
                name={ el.name } 
                text={ el.text }
            />);
        
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

const mapState = ({ messagesReducer }) => ({
    messages: messagesReducer.messages
});

const mapActions = dispatch => bindActionCreators({ load: loadMessages }, dispatch);

export default connect(mapState, mapActions)(MessageList);