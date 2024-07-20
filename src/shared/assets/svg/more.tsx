import * as React from "react"
import {forwardRef, memo} from "react";
const SvgComponent = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={22}
        height={12}
        fill="none"
    >
        <path fill="#000" d="M0 .5h22v1H0zM0 5.5h22v1H0zM0 10.5h22v1H0z" />
    </svg>
)

const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)

export default Memo