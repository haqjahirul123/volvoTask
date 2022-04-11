import React,{useRef} from 'react'
import styles from './Style.module.css'

const SearchEngine=(props)=> {
    const inputEl:any=useRef("")
    const getSearchTerm=(event:any)=>{
        //event.PreventDefault()
        props.SearchHandelar(inputEl.current.value)
        //props.setSearchTerm("")
    }

    return (
        <div className={styles.searchArea} >
        <label>Search</label>
        <input
          ref={inputEl}
          type="text"
          placeholder="Search any term"
          value={props.SearchTerm}
          onChange={getSearchTerm}
           //style={{ height:'40px',width:'99%',borderRadius:"10px",marginBottom:"1rem",marginTop:"0.5rem"}}
           className={styles.searchBox}
        />
        
        </div>
    )
}

export default SearchEngine
