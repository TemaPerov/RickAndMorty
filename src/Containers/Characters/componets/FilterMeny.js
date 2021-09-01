// import styles from "./FilterMeny.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {
  getDataFunk,
  getFilterDataFunk,
} from "../../../store/actions/characterActions/action";
import { https, character, character_url } from "../../../util/api";

const FilterMeny = ({ caractersList }) => {
  const [filtrItem, setFilterItem] = useState(false);
  const [urlName, setUrlName] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();

  const handleClick = (event, text) => {
    setAnchorEl(event.currentTarget);
    setUrlName(text);
    const arrFilt = filtr(text).filter(
      (item, el) => filtr(text).indexOf(item) === el
    );
  
    setFilterItem(arrFilt);
  };

  const handleClose = (item) => {
    setAnchorEl(null);
    if (item) {
      dispatch(
        getFilterDataFunk(
          https + character + `?${urlName}=` + item.toLowerCase()
        )
      );
    }
  };
  const handleCloseNull = () => {
    setAnchorEl(null);
  };

  const filtr = (text) => {
    if (text === "species") {
      const arrMap = caractersList.map((item, i) => item.species);
      return arrMap;
    } else if (text === "status") {
      const arrMap = caractersList.map((item, i) => item.status);
      return arrMap;
    } else if (text === "gender") {
      const arrMap = caractersList.map((item, i) => item.gender);
      return arrMap;
    }
  };
  const firstPageClick = () => {
    dispatch(getDataFunk(character_url));
  };
  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={(e) => handleClick(e, "species")}
      >
        Species
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseNull}
      >
        {filtrItem &&
          filtrItem.map((item,i) => (
            <MenuItem onClick={() => handleClose(item, "species")} key={i}>
              {item}
            </MenuItem>
          ))}
      </Menu>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={(e) => handleClick(e, "status")}
      >
        Status
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseNull}
      >
        {filtrItem &&
          filtrItem.map((item,i) => (
            <MenuItem onClick={() => handleClose(item, "status")} key={i}>
              {item}
            </MenuItem>
          ))}
      </Menu>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={(e) => handleClick(e, "gender")}
      >
        Gender
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseNull}
      >
        {filtrItem &&
          filtrItem.map((item,i) => (
            <MenuItem onClick={() => handleClose(item, "gender")} key={i}>
              {item}
            </MenuItem>
          ))}
      </Menu>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={firstPageClick}
      >
        go on first page
      </Button>
    </div>
  );
};

export default FilterMeny;
