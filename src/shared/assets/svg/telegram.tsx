import * as React from "react"
import {forwardRef, memo} from "react";
const SvgComponent = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={37}
        height={36}
        fill="none"
    >
        <path
            fill="#000"
            d="M32.42 6.548 28.195 30.31c-.32 1.677-1.15 2.094-2.332 1.305l-6.438-5.658-3.107 3.563c-.344.41-.63.753-1.294.753l.463-7.818L27.42 9.598c.519-.551-.113-.858-.806-.306L11.862 20.37l-6.35-2.371c-1.382-.514-1.407-1.647.287-2.438L30.64 4.15c1.15-.514 2.156.305 1.781 2.4Z"
        />
    </svg>
)

const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)

export default Memo