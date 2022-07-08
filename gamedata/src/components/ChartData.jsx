import React,{useState} from 'react';
import { Chart } from "react-google-charts";



   
const ChartData = ({allData}) => {
    

    console.log('chartData: ', allData)
    let filteredYear= allData.filter(game => game.year >= 2013);
   console.log('filtered year: ', filteredYear)


   let  platforms = filteredYear.map(game => game.platform)
   console.log('filtered platforms: ', platforms)

   let uniquePlatforms =[...new Set(platforms)]
   console.log('Unique Platforms: ', uniquePlatforms)



        // ["PS3", 8.94, "silver"], // RGB value
        // ["Silver", 10.49, "silver"], // English color name
        // ["Gold", 19.3, "silver"],
        // ["Platinum", 21.45, "silver"], // CSS-style declaration

     let platformArray =uniquePlatforms.map(platform=> {
        let allPlatformGames= uniquePlatforms.filter(game=> game.platform==platform)
       
        return [platform, 10,"silver"]
     })
    console.log('platform Array: ', platformArray)


     
     function getDataChart(){
       const data = [
        ["Platform", "Sales", { role: "style" }],
        ...platformArray
      ];
      console.log('getDataChart: ', data)
      return data;
    }
   
   
   
   
   
   
   
   
    return ( 
        <div>
        <Chart chartType="ColumnChart" width="100%" height="400px" data={getDataChart()} />
      </div>
     );
}
 
export default ChartData;