
import TableLocation from "./componets/TableLocation";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDataFunk,getCaractersList } from "../../store/actions/characterActions/action";

import {location_url} from '../../util/api'
import FilterMenyLocaton from "./componets/FilterMenyLocation";
const Locations = () => {
  const dispatch = useDispatch()
  const locationList  = useSelector(store=>store.characterReduser.characterList)
  const filterLacationList = useSelector(store=>store.characterReduser.filterCharacterList)

  useEffect(()=>{
    dispatch(getDataFunk(location_url))
    return(()=>{
      dispatch(getCaractersList([]))
    })
  },[])


  return (
    <>
   
    {filterLacationList &&  
    <>

    {locationList.results && <FilterMenyLocaton locationList={locationList.results}/>}
    <TableLocation filterLacationList={filterLacationList.results}/>
    </>}
    </>
  )
};

export default Locations;





