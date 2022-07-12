import React from 'react';
import { Chart } from "react-google-charts";
 

const MyChartData = ({allData}) => {
    
    let filteredYear= allData.filter(game => game.year >= 2013);


    let  genres = filteredYear.map(game => game.genre)
    console.log('filtered genres: ', genres)
    
    let uniqueGenres =[...new Set(genres)]
     console.log('unique Genres: ', uniqueGenres)


     let genresArray =uniqueGenres.map(genre=> {
        let allGenreGames= filteredYear.filter(game=> game.genre===genre);
      console.log(`allGenreGames for ${genre}:`, allGenreGames) 
    
    
      //sum together globalSales of all items in allPlatformGames
      const genreGlobalSales = allGenreGames.reduce((acc, item)=> acc +item.globalsales,0);
 
      return [genre, genreGlobalSales,"Luminous bright orange"]
   })


   function getDataChartGenre(){
     const data = [
     ["Genre", "Sales", { role: "style" }],
     ...genresArray
    ];
     // console.log('getDataChart: ', data)
     return data;
    }

     const options = {
      animation: {
     startup: true,
       easing: "linear",
       duration: 5000,
     },
     enableInteractivity: true,

    }




    
    return ( 
        
        <div c>
        <h1 lassName='text'>Genre By Global Sales In Millions </h1>
         <Chart  chartType="ColumnChart" width="100%" height="400px" options={options} data={getDataChartGenre()} />
        </div>

     );
}
 
export default MyChartData;