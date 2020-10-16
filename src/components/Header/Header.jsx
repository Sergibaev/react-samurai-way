import React from 'react'
import s from './Header.module.css'

export default function Header() {
    return (        
        <header className={s.header}>
            <img className={s.logo} src="https://logomaster.ai/static/media/sample.c8bf2b04.svg" alt=""/>    
        </header>        
    )
}
