import React,{useRef} from 'react'
import styles from './Style.module.css'

const SearchEngine=(props)=> {
    
    const inputEl:any=useRef("")

    const getSearchTerm=(event:any)=>{
        props.SearchHandelar(inputEl.current.value)
        //props.setSearchTerm("")
    }

    return (
        <div className={styles.searchArea} >
            <label>Search</label>
            <input
            ref={inputEl}
            type="text"
            placeholder="Filter by any term"
            value={props.SearchTerm}
            onChange={getSearchTerm}
            className={styles.searchBox}
            />
        
        </div>
    )
}

export default SearchEngine
