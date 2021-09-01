
import { useState } from 'react';
import {useDispatch} from "react-redux"
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {getDataFunk, getFilterDataFunk } from "../../../store/actions/characterActions/action";
import {https,location, location_url} from"../../../util/api"

const FilterMenyLocaton = ({locationList}) => {
  const[filtrItem, setFilterItem]=useState(false)
  const[urlName, setUrlName]=useState(false)

    const [anchorEl, setAnchorEl] = useState(null);
const dispatch = useDispatch()

    const handleClick = (event, text) => {
      setAnchorEl(event.currentTarget);
      setUrlName(text)
      const arrFilt =  filtr(text).filter((item,el)=> filtr(text).indexOf(item)===el)
      setFilterItem(arrFilt)  
    };

  

    const handleClose = (item) => {
      setAnchorEl(null);
 
      if(item){
      console.log(item)
        dispatch(getFilterDataFunk(https+location+`?${urlName}=`+item))
      }
   
    };
    const handleCloseNull=()=>{
      setAnchorEl(null);
    }
  
    const filtr = (text)=>{
         
            if(text==='name'){
              const arrMap = locationList.map((item,i)=>(
                item.name
            ))
            return arrMap
            }else if(text ==='type'){           
              const arrMap = locationList.map((item,i)=>(
                item.type
            ))
            return arrMap
            }else if(text==='dimension'){          
              const arrMap = locationList.map((item,i)=>(
                item.dimension
            ))
            return arrMap
            }
           
           
    }
    const firstPageClick=()=>{
      dispatch(getDataFunk(location_url))
    }
    return (
      <div>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={(e)=>handleClick(e,'name')}>
        Name
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleCloseNull}
        >{filtrItem && filtrItem.map((item,i)=>(
            <MenuItem onClick={()=>handleClose(item,'name')} key={i}>{item}</MenuItem>
        ))}
        </Menu>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={(e)=>handleClick(e,'type')}>
        Type
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleCloseNull}
        >{filtrItem && filtrItem.map((item,i)=>(
            <MenuItem onClick={()=>handleClose(item,'type')} key={i}>{item}</MenuItem>
        ))}
        </Menu>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={(e)=>handleClick(e,'dimension')}>
        Dimension
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleCloseNull}
        >{filtrItem && filtrItem.map((item,i)=>(
            <MenuItem onClick={()=>handleClose(item,'dimension')} key={i}>{item}</MenuItem>
        ))}
        </Menu>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={firstPageClick}>
            No filter
        </Button>
      </div>
    );
};

export default FilterMenyLocaton;