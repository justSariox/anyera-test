import * as React from "react"
import {forwardRef, memo} from "react";
const SvgComponent = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={19}
        height={19}
        fill="none"
    >
        <path
            fill="black"
            fillRule="evenodd"
            d="m12.607 11.01 6.143 6.143-1.597 1.597-6.143-6.143c-1.147.826-2.53 1.33-4.042 1.33a6.968 6.968 0 1 1 6.969-6.969c0 1.512-.504 2.895-1.33 4.042ZM6.968 2.144a4.818 4.818 0 0 0-4.824 4.824 4.818 4.818 0 0 0 4.824 4.824 4.818 4.818 0 0 0 4.825-4.824 4.818 4.818 0 0 0-4.825-4.824Z"
            clipRule="evenodd"
        />
    </svg>
)

const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)

export default Memo