import * as React from "react"
import {forwardRef, memo} from "react";
const SvgComponent = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={30}
        fill="none"
    >
        <path fill="#101010" d="M0 1.724 1.542.192 30 28.467 28.458 30 0 1.724Z" />
        <path
            fill="#101010"
            d="m1.902 29.157-1.58-1.57L28.084 0l1.58 1.57L1.903 29.158Z"
        />
    </svg>
)

const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)

export default Memo