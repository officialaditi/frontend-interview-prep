import { useState } from "react"


export const Search = () => {
    const [search, setSearch]  = useState('')

    return <>
    <h1>{search}</h1>
    <label>this typing with user :- </label>
    <input value={search} onChange={(e) => setSearch(e.target.value)} type='text' placeholder="search" />
    </>
}