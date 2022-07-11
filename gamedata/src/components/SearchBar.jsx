import React,{useState} from 'react';




const SearchBar = (props) => {
   
    const[saveSearch,setSaveSearch]=useState()
   
    const FilterSearch = (data) =>  {
        let  results = data.filter((item)  => {
            if (item.game_rank === saveSearch||item.name === saveSearch||item.platform === saveSearch||item.year === saveSearch||item.genre === saveSearch ||item.northamericasales === saveSearch||item.europesales === saveSearch||item.japansales === saveSearch||item.othersales === saveSearch||item.globalsales === saveSearch) {
                return true;}
        }
        )
        props.setAllData(results)
      return results;  
    }
    function handelSearch(event){
      
     event.preventDefault();
    FilterSearch(props.allData)
     
    }
    
    
    
     return ( 
    <form onSubmit={handelSearch}>
         <div > 
       <input type='text' value={saveSearch} onChange={(event)=> setSaveSearch(event.target.value)} ></input>
       {console.log('savedSearch:',saveSearch)}
       <button className='' type='submit' placeholder='What game are you looking for'>Search</button>
         </div>
         </form>
      );
}
 
export default SearchBar;