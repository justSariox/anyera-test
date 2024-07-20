'use client'

import s from './header.module.scss'

import { useState } from "react";

import { Logo, More, User } from "@/shared/assets";
import { Button, Popup } from "@/shared/ui";




export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => setIsOpen(true)

    const handleClose = () => setIsOpen(false)

    return (
        <header>
            <div className={s.headerContainer}>
                <Logo />
                <Button classname={s.menu} onClick={handleOpen} type={"icon"} icon={[<More key={null}/>, <User key={null}/>] } variant=""/>
                <Popup isOpen={isOpen} handleClose={handleClose}/>
            </div>
        </header>
    )
}