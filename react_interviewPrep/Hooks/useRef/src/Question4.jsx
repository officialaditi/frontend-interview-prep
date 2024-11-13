

export const Question4 = () => {
    return (
        <ul>
            <li style={{color:'red'}}>useState:-</li>
            <li>its manages the state and trigger re-render whenever the value got updated, when we update using the setterFuction (setStateValue), the component will re-render and the updated value is reflected into the UI</li>
            <li style={{color: 'red'}}>useRef:-</li>
            <li>it hold a mutable value(current) that persist across renders without causing re-render of component when you update it (refValue.current = ...) the component does not re-render, but the updated value is stored and accessible across renders</li>
        </ul>
    )
}