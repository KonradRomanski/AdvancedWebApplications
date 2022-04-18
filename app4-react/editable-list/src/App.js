// import logo from './logo.svg';
import { useLocation } from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Entry from './components/Entry';
import Adder from './components/Adder'
import data from './data/data.json'
var alteredData = data

function sortA() {
  console.log("SortA")
  alteredData.entries.sort(function(a, b) {return a.data.name.localeCompare(b.data.name)})
}

function sortD() {
  console.log("SortD")
  alteredData.entries.sort(function(a, b) {return b.data.name.localeCompare(a.data.name)})
}

function search(word) {
  alteredData.forEach(function(entry, index) {
    if (entry.data.name == word) {
      alteredData = {"entries": [entry]}
      return 1
    }
  }
  )

}

function add(entry) {
  var _id = alteredData.entries[alteredData.entries.length - 1].id + 1
  alteredData.entries.push({
   "id": _id,
   "data": entry
  })
}

function remove(id) {
  var loc = 0
  alteredData.entries.forEach(function(entry, index) {
    if (entry.id == id) {
      loc = index
    } 
  }
  )
  alteredData.entries.pop(loc)
}

function restore() {
  alteredData = data
}

function App() {
  // console.log(window.location.pathname)
  // sortD()
  console.log(alteredData)
  var tiles = []
  alteredData.entries.forEach(function(entry, index) {
    tiles.push(
      <Entry 
        name = {alteredData.entries[index].data.name}
        description= {alteredData.entries[index].data.description}
        img = {alteredData.entries[index].data.img}
        rating = {alteredData.entries[index].data.rating}
        link = {alteredData.entries[index].data.link}
    />
    )
  })

  return (
    <div className="App">
      <Header 
      sortA = {sortA}
      sortD = {sortD}/>
      <div className='Main'>
        {tiles}
        <Adder/>
      </div>

      <Footer/>
    </div>
  );
}

export default App
