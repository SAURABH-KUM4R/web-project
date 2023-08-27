import useDebounce from "../../Hooks/useDebounce";
import './Search.css'
function Search({ setSearch }){
    const debounceCallback = useDebounce((e) => {setSearch(e.target.value)});
    return (
        <>
            <input type="text" onChange={debounceCallback}/>
        </>
    )
}

export default Search;