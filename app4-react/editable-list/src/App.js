// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Entry from './components/Entry';
import Adder from './components/Adder'
import data from './data/data.json'
import { useState, useEffect } from 'react';
import cloneDeep from 'lodash/cloneDeep';
var alteredData = cloneDeep(data)
var searchAlteredData

function sortA() {
  alteredData.entries.sort(function(a, b) {return a.data.name.localeCompare(b.data.name)})
  console.log("SortA", alteredData)
}

function sortD() {
  console.log("SortD", alteredData)
  alteredData.entries.sort(function(a, b) {return b.data.name.localeCompare(a.data.name)})
}

function search(word) {
  var found = false
  searchAlteredData = cloneDeep(alteredData)
  console.log(word)
  alteredData.entries.forEach(function(entry, index) {
    if (entry.data.name == word) {
      found = true
      alteredData = {"entries": [entry]}
      return 1
    }
  }
  )
  if (!found) {
    alteredData = cloneDeep(searchAlteredData)
  }
  console.log("Search", alteredData)

}

function add(entry) {
  var _id = alteredData.entries[alteredData.entries.length - 1].id + 1
  alteredData.entries.push({
   "id": _id,
   "data": entry
  })
  console.log("add", alteredData)
}

function remove(id) {
  var loc = 0
  alteredData.entries.forEach(function(entry, index) {
    if (entry.id == id) {
      loc = index
    } 
  }
  )
  alteredData.entries.splice(loc, 1)

  console.log("remove", alteredData)
  console.log(loc, id)
}

function restore() {
  alteredData = cloneDeep(data)
  console.log("restore", alteredData)
}

function App() {
  // console.log(window.location.pathname)
  // sortD()
  console.log(alteredData)
  const [tiles, setTiles] = useState()
  useEffect(() => {
  var _tiles = []
  alteredData.entries.forEach(function(entry, index) {
    _tiles.push(
      <Entry 
        name = {alteredData.entries[index].data.name}
        description= {alteredData.entries[index].data.description}
        img = {alteredData.entries[index].data.img}
        rating = {alteredData.entries[index].data.rating}
        link = {alteredData.entries[index].data.link}
    />
    )
    setTiles(_tiles)
  }, [])})

// function App() {
//   // console.log(window.location.pathname)
//   // sortD()
//   console.log(alteredData)
//   var tiles = []
//   alteredData.entries.forEach(function(entry, index) {
//     tiles.push(
//       <Entry 
//         id = {alteredData.entries[index].id}
//         name = {alteredData.entries[index].data.name}
//         description= {alteredData.entries[index].data.description}
//         img = {alteredData.entries[index].data.img}
//         rating = {alteredData.entries[index].data.rating}
//         link = {alteredData.entries[index].data.link}
//         remove = {remove}
//     />
//     )
//   })

  return (
    <div className="App">
      <Header 
      sortA = {sortA}
      sortD = {sortD}
      search = {search}
      restore = {restore}/>
      <div className='Main'>
        {tiles}
        <Adder
        add = {add}/>
      </div>

      <Footer/>
    </div>
  );
}

export default App
