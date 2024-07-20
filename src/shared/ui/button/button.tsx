import s from './button.module.scss'

import { ReactNode } from "react";

type Props = {
    onClick?: () => void
    type: 'text' | 'icon'
    classname?: string
    fullwidth?: boolean
    label?: string
    icon?: ReactNode | ReactNode[]
    variant: 'primary' | ''
}
export const Button = ({type, onClick, fullwidth, classname, label, icon, variant}: Props) => {
    return (
        type === "icon"
            ? (
                <button onClick={onClick} className={`${s.iconButton} ${classname}`}>{icon}</button>
            )
            : (
                <button  onClick={onClick} className={`${s[variant]} ${fullwidth ? s.fullwidth : ''}  ${classname} `}>{label}</button>
            )
    )
}