import React,{useState} from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar'
import ChartData from './components/ChartData'




function App() {

  const [allData, setAllData]=useState([]);

  async function getAllData(){
    let response =await axios.get('http://localhost:8080/all/')
    setAllData(response.data)
    console.log(response.data)
  }





  return (
    <div>
    <div>
      <SearchBar />
    </div>
    <div><ChartData />
    </div>
    </div>
  );
}

export default App;
