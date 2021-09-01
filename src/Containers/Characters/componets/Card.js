// import styles from "./Card.module.css";

import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";

import Backdrops from "./Backdrops";
import {
  changeBackdropState,
  getDataFunk,
} from "../../../store/actions/characterActions/action";
import { https, character } from "../../../util/api";
const useStyles = makeStyles({
  root: {
    width: 345,
    margin: "20px",
  },
});

const CardForm = ({ caractersList }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const onePerson = useSelector((store) => store.characterReduser.onePerson);

  const handleToggle = (num) => {
    dispatch(changeBackdropState(true));
    dispatch(getDataFunk(https + character + num));
  };

  return (
    <>
      {caractersList &&
        caractersList.results.map((elem, index) => (
          <Card
            className={classes.root}
            key={index}
            onClick={() => handleToggle(elem.id)}
          >
            {elem.origin && (
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={elem.name}
                  height="200"
                  image={elem.image}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {elem.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {elem.species}, {elem.gender}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {elem.origin.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    location: {elem.location.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            )}
          </Card>
        ))}
      {onePerson && <Backdrops onePerson={onePerson} />}
    </>
  );
};

export default CardForm;
