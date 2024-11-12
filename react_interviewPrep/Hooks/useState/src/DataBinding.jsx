import { useState } from "react"


export const DataBinding = () => {
    const [value, setValue] = useState('')
    return (
        <>
        <h1>two way data binding</h1>
        <p>Input value: {value}</p>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        </>
    )
}