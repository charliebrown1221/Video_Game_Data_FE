import React,{useState,useEffect} from 'react';
import './App.css'
import axios from 'axios';
import SearchBar from './components/SearchBar'
import ChartData from './components/ChartData'
import MyChartData from './components/MyChartData'



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
    
    <div  className='header'>
    <div>
      <ChartData allData={allData}/>
    </div>
    <div>
      <MyChartData allData={allData}/></div>
    <div className='bar'>
      <SearchBar FilterSearch={FilterSearch}/>
    </div>
    {searchData.map((el)=>{
      return<> 
      <div className='name'>Name: {el.name}  </div>
      <div className='platform'>Platform: {el.platform}</div>
      <div className='year'>Year: {el.year}</div>
      <div className='genre'>Genre: {el.genre}</div>
      <hr></hr>
      </>
    })}
    </div>
  );
}

export default App;
