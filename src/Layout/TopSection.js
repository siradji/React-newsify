import React, { useContext } from 'react';
import TopNewsContext from '../Context/TopNews/topNewsContext';

import Typnography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/Styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(4)
    }
  },
  topSection: {
    height: '50vh'
  }
}));
const TopSection = () => {
  const classes = useStyles();
  const context = useContext(TopNewsContext);
  return (
    <>
      <Typnography component='h5' variant='h5' className={classes.root}>
        Top news from NY times
      </Typnography>
      <div className={classes.topSection}></div>
    </>
  );
};
export default TopSection;
