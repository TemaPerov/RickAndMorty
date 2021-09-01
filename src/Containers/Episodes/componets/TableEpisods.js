
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import BackdropEpisodes from "./BackdropEpisodes";
import { dateFormat } from "../../../helpers/dateFormat";
import {
  changeBackdropEpisodes,
  getDataFunkEpisodes,
} from "../../../store/actions/episods/action";
import { https, episode } from "../../../util/api";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableRow:{
    cursor: 'pointer'
  }
});



const TableEpisods = ({ filterEpisodesList }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const oneEpisode = useSelector((store) => store.episodesReduser.oneEpisode);
  const imgCharaccters = useSelector(
    (state) => state.episodesReduser.imgCharaccters
  );
  const episodesArrFiltr = filterEpisodesList;



  const clickTable = (num) => {
    dispatch(changeBackdropEpisodes(true));
    dispatch(getDataFunkEpisodes(https + episode + num));
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Air date</TableCell>
              <TableCell align="right">Episode</TableCell>
              <TableCell align="right">Created</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {episodesArrFiltr && episodesArrFiltr.map((item) => (
              <TableRow key={item.id} onClick={() => clickTable(item.id)} className={classes.tableRow}>
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                <TableCell align="right">{item.air_date}</TableCell>
                <TableCell align="right">{item.episode}</TableCell>
                <TableCell align="right" key={item.id}>{dateFormat(item.created)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {imgCharaccters ? <BackdropEpisodes oneEpisode={oneEpisode} /> : null}
    </>
  );
};

export default TableEpisods;
