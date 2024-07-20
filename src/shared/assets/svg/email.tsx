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
            d="M7.466 7.2h23.85c2.25 0 3.384 1.062 3.384 3.222v15.156c0 2.142-1.134 3.222-3.384 3.222H7.466c-2.25 0-3.384-1.08-3.384-3.222V10.422c0-2.16 1.134-3.222 3.384-3.222Zm11.916 15.48 12.132-9.954c.432-.36.774-1.188.234-1.926-.522-.738-1.476-.756-2.106-.306l-10.26 6.948L9.14 10.494c-.63-.45-1.584-.432-2.106.306-.54.738-.198 1.566.234 1.926l12.114 9.954Z"
        />
    </svg>
)

const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)

export default Memo