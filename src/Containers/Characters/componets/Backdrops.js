import styles from "./Backdrops.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Backdrop from "@material-ui/core/Backdrop";


import { makeStyles } from "@material-ui/core/styles";


import Typography from "@material-ui/core/Typography";
import {
  changeBackdropState,

  getOnePerson,
} from "../../../store/actions/characterActions/action";


const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  root: {
    height: "  80vh",
  },
}));

const Backdrops = ({ onePerson }) => {
  const classes = useStyles();
  const open = useSelector((state) => state.characterReduser.backdropSate);
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(getOnePerson([]));
    };
  }, []);

  const handleClose = () => {
    dispatch(changeBackdropState(false));
  };

  return (
    <div>
      {onePerson.location && (
        <Backdrop
          className={classes.backdrop}
          open={open}
          onClick={handleClose}
        >
     
          <div className={styles.box}>
            <div>
              {" "}
              <img src={onePerson.image} alt={onePerson.name} />
            </div>
            <div>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                color="textSecondary"
              >
                {onePerson.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {onePerson.species}, {onePerson.gender}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {onePerson.species}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                status: {onePerson.status}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                location:{onePerson.location.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                origin: {onePerson.origin.name}
              </Typography>
            </div>
          </div>
        </Backdrop>
      )}
    </div>
  );
};

export default Backdrops;
