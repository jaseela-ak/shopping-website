import './Search.css';
import {CiSearch} from 'react-icons/ci'
const Search = () => {
  return (
    <div className="search">
       <input
            type="text"
            id="header-search"
            placeholder="Search what you need"
            name="s" 
        />
       
            <CiSearch/>
       
        
      </div>
  )
}

export default Search