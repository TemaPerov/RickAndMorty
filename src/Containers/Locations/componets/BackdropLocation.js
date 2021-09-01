
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Backdrop from "@material-ui/core/Backdrop";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

import Card from "@material-ui/core/Card";

import Typography from "@material-ui/core/Typography";
import {
  changeBackdropEpisodes,
  getCharctersImg,
  removeCharactersImgAction,
} from "../../../store/actions/episods/action";
import ImageListFunk from "../../../Componets/ImageList";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  root: {
    width: "80%",
    height: "  80vh",
    position: "relative",
    padding: 20
 
  },
}));

const BackdropLocation = ({ oneEpisode }) => {
  const classes = useStyles();
  const open = useSelector((state) => state.episodesReduser.backdropState);
  const imgCharaccters = useSelector(
    (state) => state.episodesReduser.imgCharaccters
  );
  const dispatch = useDispatch();

 
  const handleClose = () => {
    dispatch(changeBackdropEpisodes(false));
    dispatch(removeCharactersImgAction([]));
  };

  const peronageImg = () => {
    const charctersUrl = oneEpisode.residents;
    if (charctersUrl) {
      charctersUrl.map((el, i) => dispatch(getCharctersImg(el)));
    }
  };
  const onclickFunk = () => {
    if(imgCharaccters.length > 0){
      dispatch(removeCharactersImgAction([]));
    }else{
      peronageImg();
    }    
   
  };
  const ImgDiv = () => {
    if (imgCharaccters.length > 0) {
      return <ImageListFunk imgCharaccters={imgCharaccters} />;
    } 
  };

  return (
    <div >
      <Backdrop className={classes.backdrop} open={open}  >
        <Card className={classes.root} >
          <Box
            position="absolute"
            top={0}
            right={0}
            
          >
            <Button onClick={handleClose}>Close</Button>
          </Box>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            color="textSecondary"
          >
           Planet: {oneEpisode.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              Type: {oneEpisode.type}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => onclickFunk()}
          >
            Shove oll residents
          </Button>
          {ImgDiv()}

          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
          ></Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
         
          </Typography>
        </Card>
      </Backdrop>
    </div>
  );
};

export default BackdropLocation;
