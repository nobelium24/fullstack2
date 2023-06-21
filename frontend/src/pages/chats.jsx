import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';

const Chat = () => {
    const endPoint = 'http://localhost:6650'
    // const [socket, setSocket] = useState("")
    const [message, setMessage] = useState("") //state for the message we want to send
    const [receivedMessage, setReceivedMessage] = useState([]) //state for the message we want to receive
    let socket = useRef()
    // console.log(socket)
    useEffect(() => {
        // setSocket(io(endPoint))
        socket.current = io(endPoint)
        console.log(socket)
    }, [])

    const sendMessage = () => {
        console.log(message)
        socket.current.emit("message", message)
    }
    useEffect(() => {
        if (receivedMessage) {
            socket.current.on("broadcast", (message) => {
                setReceivedMessage([...receivedMessage, message])
            })
        }
    }, [receivedMessage])
    return (
        <>
            <h1>React Chat Chat</h1>
            <div className="messages">
                {
                    receivedMessage.map((message, i) => (
                        <p key={i}>{message}</p>
                    ))
                }
                <input type='text' onChange={(e) => setMessage(e.target.value)} />
                <button onClick={sendMessage}>Send chat</button>
            </div>

        </>
    )
}
export default Chat;