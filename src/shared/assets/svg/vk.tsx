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
            d="M31.862 9.307c.192-.753 0-1.307-.925-1.307h-3.062c-.78 0-1.138.476-1.33 1.006 0 0-1.56 4.402-3.764 7.256-.712.825-1.04 1.09-1.43 1.09-.192 0-.488-.265-.488-1.018V9.307C20.863 8.403 20.645 8 20 8h-4.813c-.489 0-.78.422-.78.813 0 .855 1.102 1.054 1.217 3.463v5.227c0 1.144-.177 1.355-.567 1.355-1.04 0-3.566-4.42-5.063-9.479C9.693 8.397 9.396 8 8.612 8H5.55c-.873 0-1.05.476-1.05 1.006 0 .94 1.04 5.606 4.84 11.773 2.53 4.209 6.096 6.491 9.34 6.491 1.95 0 2.188-.506 2.188-1.379 0-4.022-.176-4.402.8-4.402.453 0 1.233.265 3.052 2.294 2.08 2.41 2.422 3.487 3.587 3.487h3.061c.873 0 1.315-.506 1.06-1.505-.582-2.102-4.517-6.426-4.693-6.715-.453-.674-.323-.975 0-1.578.005-.006 3.742-6.1 4.127-8.165Z"
        />
    </svg>
)

const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)

export default Memo