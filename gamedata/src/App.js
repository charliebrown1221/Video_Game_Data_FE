import React,{useState,useEffect} from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar'
import ChartData from './components/ChartData'




function App() {

  const [allData, setAllData]=useState([]);



  useEffect(()=>{
    getAllData();
  },[])

  async function getAllData(){
    try {
    let response =await axios.get('http://localhost:8080/all/')
    setAllData(response.data)
    console.log(response.data)
    } catch (error) {
      
    }
    
  }





  return (
    <div>
    <div>
      <SearchBar setAllData={setAllData} allData={allData}/>
    </div>
    <div><ChartData allData={allData}/>
    </div>
    </div>
  );
}

export default App;
