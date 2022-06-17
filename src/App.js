import {useEffect, useState } from 'react'
import Gallery from './componets/Gallery'
import SearchBar from './componets/SearchBar'

function App(){
  let [search, setSearch] = useState('')
  let [message, setMessage] = useState('Search for Music!')
  let [data, setData] = useState([])
  
  return (
    <div>
        <SearchBar />
        {message}
        <Gallery />
    </div>
  )
}

export default App;
