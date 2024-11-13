


export const Question2 = () => {
    return (
        <>
        <ul>
            <li>if their is no dependency array, <strong>it will run after every render</strong></li>
            <li> if dependency array is empty <strong>it only run once when the page get loads</strong></li>
            <li>if we have value inside the dependency array <strong>it run whenever the value get change inside the dependency array</strong></li>
            <h1>why it is important to handle the dependency???</h1>
            <li>handling dependencies is important to ensure that the effect only run when neccessary and prevent from unneccessary re-execution of the effect</li>
            <li>it optimizing the preformance and avoiding potential bugs</li>
        </ul>
        </>
    )
}