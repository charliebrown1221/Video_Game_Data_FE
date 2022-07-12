import React from 'react';
import { Chart } from "react-google-charts";
import "./Chart.css"



   
const ChartData = ({allData}) => {

    // console.log('chartData: ', allData)
    let filteredYear= allData.filter(game => game.year >= 2013);
  //  console.log('filtered year: ', filteredYear)

   let  platforms = filteredYear.map(game => game.platform)
  //  console.log('filtered platforms: ', platforms)

   let uniquePlatforms =[...new Set(platforms)]
  //  console.log('Unique Platforms: ', uniquePlatforms)

     let platformArray =uniquePlatforms.map(platform=> {
        let allPlatformGames= filteredYear.filter(game=> game.platform===platform);
      // console.log(`allPlatformGames for ${platform}:`, allPlatformGames) 

        //sum together globalSales of all items in allPlatformGames
        const platformGlobalSales = allPlatformGames.reduce((acc, item)=> acc +item.globalsales,0);
 
        return [platform, platformGlobalSales,"Luminous bright orange"]
     })
    // console.log('platform Array: ', platformArray)

     function getDataChart(){
       const data = [
        ["Platform", "Sales", { role: "style" }],
        ...platformArray
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
};
    return ( 
        <div>
            <h1 className='text'>Platform By Global Sales In Millions </h1>
        <Chart chartType="ColumnChart" width="100%" height="400px" options={options} data={getDataChart()} 
      //   controls={[
      //   {
      //     controlType: "NumberRangeFilter",
      //     options: {
      //       filterColumnIndex: 1,
      //       minValue: 0,
      //       maxValue: 300000000,
      //     },
      //   },
      // ]}
    />
      </div>
     );
}
export default ChartData;