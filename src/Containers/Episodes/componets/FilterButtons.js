
import {useDispatch} from "react-redux";
import Button from "@material-ui/core/Button";
import {getFilterListEpisodes} from '../../../store/actions/episods/action'


const FilterButtons = ({episodesList,filterEpisodesList}) => {
    const dispatch = useDispatch()
    
    
    const onclickFunk=(sortBy)=>{     
      const nameEpisodes = filterEpisodesList
        switch(sortBy){           
            case "Name":
               nameEpisodes.sort((a,b)=>a.name.localeCompare(b.name))  
               dispatch(getFilterListEpisodes(nameEpisodes))
               break
            case "NameIncrease":
                nameEpisodes.sort((a,b)=>b.name.localeCompare(a.name))     
               dispatch(getFilterListEpisodes(nameEpisodes))
               break
            case "NoFiltr":   
            console.log(nameEpisodes)             
               dispatch(getFilterListEpisodes(episodesList.results))
               break
               default: return null
        }
    }

  return (
    <>
      <Button variant="contained" color="primary"  onClick={()=>onclickFunk("Name")}>
        For Name a-b
      </Button>
      <Button variant="contained" color="secondary"  onClick={()=>onclickFunk("NameIncrease")}>
        For Name b-a
      </Button>
      <Button variant="contained"  onClick={()=>onclickFunk("NoFiltr")}>
        No filters
      </Button>
    </>
  );
};

export default FilterButtons;
