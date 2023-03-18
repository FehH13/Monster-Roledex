import './searchBox.css';

const SearchBox = ({className, placeholder, searchChange}) => (    
    <input 
        className={`search-box ${className}`} 
        type='search' 
        placeholder={placeholder}
        onChange={searchChange}
    />
            
)


export default SearchBox;