import React from 'react'
import s from './../Dialogs.module.css'


export default function Message(props) {
    return (
        <div>
            <div className={s.message}>{props.icon}{props.text}</div>
        </div>
    )
}