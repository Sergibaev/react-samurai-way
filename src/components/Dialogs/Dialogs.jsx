import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import s from './Dialogs.module.css'

export default function Dialogs(props) {

    let dialogsElements = props.dialogs
        .map( dialog => <DialogItem name={dialog.name} id={dialog.id} /> )

    let messagesElements = props.msg
        .map( message => <Message text={message.text} /> )
    
    return (        
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}            
            </div>            
        </div>      
        )
}
