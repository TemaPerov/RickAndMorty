import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import { useDispatch, useSelector } from "react-redux";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: "60%",
    height: 350 ,
  },

}));

const ImageListFunk = ({ imgCharaccters }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <ImageList rowHeight={180} className={classes.imageList}>
     
        {imgCharaccters.map((item, i) => (      
            <ImageListItem key={i}>
              <img src={item.image} alt={item.name}/>
              <ImageListItemBar title={item.title} subtitle={item.name} />
            </ImageListItem>
         
        ))}
      </ImageList>
    </div>
  );
};

export default ImageListFunk;
