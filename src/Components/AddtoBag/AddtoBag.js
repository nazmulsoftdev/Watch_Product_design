import React from 'react'

function AddtoBag({ className, children,OrderAction}) {
    
    return <button onClick={OrderAction} className={className}>{children}</button>
}

export default AddtoBag
