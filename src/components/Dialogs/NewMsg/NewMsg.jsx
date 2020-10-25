import React from 'react'


export default function NewMsg(props) {

    let sendEl = React.createRef()

    let send = () => {
        let text = sendEl.current.value
        alert(text)
    }

    return (
        <div>
            <textarea cols="100" rows="5" ref={sendEl}></textarea>
            <button onClick={send}>Send</button>
        </div>
    )
}