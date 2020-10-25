import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import s from './Dialogs.module.css'
import NewMsg from './NewMsg/NewMsg'

export default function Dialogs(props) {

    let dialogsElements = props.state.dialogs
        .map( dialog => <DialogItem name={dialog.name} id={dialog.id} /> )

    let messagesElements = props.state.msg
        .map( message => <Message img={message.icon} text={message.text} /> )
    
    return (        
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}   
                <NewMsg />   
            </div> 
                       
        </div>      
        )
}
