import React, { Component } from 'react';
import Message from './../Message';
import './Chat.css';

class Chat extends Component {
    constructor (props) {
        super(props);
        this.state = {
            messageInput: '',
            messages: []
        }
    }

    changeInputMessage = event => {
        this.setState({messageInput: event.target.value})
    }

    sendMessageOnEnter = event => {
        if (event.key === 'Enter') {
            this.setState(({messages, messageInput}) => ({
                messages: [...messages, {text: messageInput}],
                messageInput: ''
            }))
        }
    }
    
    render() {
        return (
            <div className="chat">
                <div className="message-list">
                    <div className="messages">
                        {this.state.messages.map((message, index) => {
                            return <Message key={index} text={message.text}/>
                        })}
                    </div>
                </div>
                <input 
                    className="input-message" 
                    type="text" 
                    value={this.state.messageInput}
                    onChange={this.changeInputMessage}
                    onKeyDown={this.sendMessageOnEnter}
                />
            </div> 
        )
    }
}

export default Chat;