// import styles from "./TableEpisods.module.css";
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
import BackdropLocation from "./BackdropLocation";
import { dateFormat } from "../../../helpers/dateFormat";
import {
  changeBackdropEpisodes,
  getDataFunkEpisodes,
} from "../../../store/actions/episods/action";
import { https, location } from "../../../util/api";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableRow: {
    cursor: "pointer",
  },
});

const TableLocation = ({ filterLacationList }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const oneEpisode = useSelector((store) => store.episodesReduser.oneEpisode);
  const imgCharaccters = useSelector(
    (state) => state.episodesReduser.imgCharaccters
  );
  const episodesArrFiltr = filterLacationList;

  const clickTable = (num) => {
    dispatch(changeBackdropEpisodes(true));
    dispatch(getDataFunkEpisodes(https + location + num));
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
              <TableCell align="center">Type</TableCell>
              <TableCell align="center">Dimension</TableCell>
              <TableCell align="center">Created</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {episodesArrFiltr &&
              episodesArrFiltr.map((item) => (
                <TableRow
                  key={item.id}
                  onClick={() => clickTable(item.id)}
                  className={classes.tableRow}
                >
                  <TableCell component="th">{item.name}</TableCell>
                  <TableCell align="center">{item.type}</TableCell>
                  <TableCell align="center">{item.dimension}</TableCell>
                  <TableCell align="right" key={item.id}>{dateFormat(item.created)}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {imgCharaccters ? <BackdropLocation oneEpisode={oneEpisode} /> : null}
    </>
  );
};

export default TableLocation;
