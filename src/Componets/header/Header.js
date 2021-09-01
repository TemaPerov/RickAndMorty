
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';

import {TabPanel} from './componets/TabPanel'
import Characters from "../../Containers/Characters/Characters"
import Episodes from '../../Containers/Episodes/Episodes';
import Locations from '../../Containers/Locations/Locations';
import {getPageName} from '../../store/actions/pageNameActions/action'


function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Header = () => {
const dispatch=useDispatch()
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    dispatch(getPageName(newValue))
  };

  return (
    <div className={classes.root}>
      <Paper position="static">
        <Tabs value={value} onChange={handleChange}  indicatorColor="primary" centered>
          <Tab label="Characters" {...a11yProps(0)} />
          <Tab label="Episodes" {...a11yProps(1)} />
          <Tab label="Locations" {...a11yProps(2)} />
        </Tabs>


      </Paper>
      <TabPanel value={value} index={0}>
       <Characters/>
      </TabPanel>

      <TabPanel value={value} index={1}>
       <Episodes/>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Locations/>
      </TabPanel>

    </div>
  );
};

export default Header;
