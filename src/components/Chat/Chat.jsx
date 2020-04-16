import React, { Component } from 'react';
import Message from './../Message';
import './Chat.css';

class Chat extends Component {
    state = {
        messageInput: '',
        messages: []
    }
    messagesRef = React.createRef();

    changeInputMessage = event => {
        this.setState({ messageInput: event.target.value });
    }

    sendMessageOnEnter = ({ key }) => {
        const { messageInput, messages } = this.state;

        if (key === 'Enter' && !!messageInput) {
            this.setState({
                messageInput: '',
                messages: [...messages, {text: messageInput}]
            })
        }
    }

    componentDidUpdate() {
        const messagesEl = this.messagesRef.current;

        if (messagesEl && messagesEl.scrollHeight > messagesEl.clientHeight) {
            messagesEl.scrollTop = messagesEl.scrollHeight;
        }
    }

    render() {
        const { messages } = this.state;
        const messagesList = messages.length 
            ? messages.map((item, index) => <Message key={index} text={ item.text } />)
            : null;

        return (
            <div className="chat">
                <div className="message-list" ref={this.messagesRef}>
                    <div className="messages">
                        { messagesList }
                    </div>
                </div>
                <input 
                    type="text" 
                    placeholder="Сообщение" 
                    className="input-message" 
                    value={this.state.messageInput}
                    onChange={this.changeInputMessage}
                    onKeyPress={this.sendMessageOnEnter}
                />
            </div>
        )
    }
}

export default Chat;