import React,{useState,useEffect} from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar'
import ChartData from './components/ChartData'




function App() {

  const [allData, setAllData]=useState([]);
  const [searchData, setSearch]=useState([]);

  const FilterSearch = (searchData) =>  {
    console.log(searchData)
    let  results = allData.filter((item)  => {
        if (item.name.includes(searchData)||item.platform.includes(searchData)||item.year ===searchData ||item.genre.includes(searchData) ) 
        {
            return true;
          } 
            else {
                return false
            }
    
    }
    )
    console.log("results",results)
    setSearch(results) 
       
}

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
      <ChartData allData={allData}/>
    </div>
    <div>
      <SearchBar FilterSearch={FilterSearch}setSearch={setSearch} searchData={searchData}/>
    </div>
    
    </div>
  );
}

export default App;
