function Search({setSearchValue, searchValue}) {
 
  return (
    <form className='search'>
      <input 
        placeholder='Search for job'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button>Search</button>
    </form>
  )
}

export default Search