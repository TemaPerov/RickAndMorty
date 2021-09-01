import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDataFunk,
  nextUrlCaracters,
} from "../store/actions/characterActions/action";
import { getDataFunkEpisodes } from "../store/actions/episods/action";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import Box from '@material-ui/core/Box';
import { https, character, episode, location, numPage } from "../util/api";


const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
    marginTop: theme.spacing(2),
  
    },
  },
}));

const Buttons = () => {
  const caractersList = useSelector(
    (state) => state.characterReduser.characterList
  );
  const episodesList = useSelector(
    (state) => state.episodesReduser.episodesList
  );
  const pageName = useSelector((state) => state.pageNameReduser.pageName);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
 
  const classes = useStyles();

  const handleChange = (event, value) => {
    setPage(value)

    switch (pageName) {
      case 0:        
        dispatch(getDataFunk(https + character + numPage + value));
        break;
      case 1:       
        dispatch(getDataFunkEpisodes(https + episode + numPage + value));
        break;
      case 2:     
        dispatch(getDataFunk(https + location + numPage + value));
        break
      default: return null;
    }
  };
  
  const numOfPages = () => {
     switch (pageName) {
      case 0:
        if(caractersList.info ){
          const pages = caractersList.info.pages;  
          return pages;
        }
      break
      case 1:     
      if(episodesList.info) {
        const pages1 = episodesList.info.pages;      
        return pages1   
      }
        break
      case 2:
        if(caractersList.info ){
        const pages2 = caractersList.info.pages;
        return pages2;
        }
      default:
        return null;      
    }
  };



  useEffect(()=>{
    setPage(1)
},[pageName])


  return (
    <> 
      <Box className={classes.root}  display="flex" justifyContent="center">
      <Pagination count={numOfPages()} page={page} onChange={handleChange} />
      </Box>
    </>
  );
};

export default Buttons;
