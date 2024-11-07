import { useState, useEffect } from 'react';
import bildingDataJson from '../data/building.json';

interface Floor {
  name: string;
  soldiers: number;
  purpose: string;
  description: string;
  activity:string
}

const useBuildingData = () => {
  const [buildingData, setBuildingData] = useState<Floor[]>([]);
  const Data = bildingDataJson;
  useEffect(() => {
    setBuildingData(Data);
  }, []);

  const getFloorByIndex = (floorIndex:number): Floor |undefined =>
  {
    return buildingData[floorIndex]
  }

  const getListOfActivities = ():string[]=>{
    let activities:string[] = [];
    buildingData.forEach((floor:Floor)=>{
      activities.push(floor.activity);
    })
    activities = Array.from(new Set(activities));
    return activities;
  }
  return {
    buildingData,
    getFloorByIndex,
    getListOfActivities
  };
};

export default useBuildingData;
