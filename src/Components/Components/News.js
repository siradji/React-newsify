// Import React
import React, { useContext } from 'react';

//  Import Components
import Spinner from '../../Layout/Spinner';
import NewsItem from './NewsItem';

// import material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// Import Context
import TopNewsContext from '../../Context/TopNews/topNewsContext';

// Initialzing makeStyles
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '95%',
    margin: 'auto',
    justifyContent: 'center',
    marginTop: '10px'
  }
}));
const News = () => {
  // Initializing Context Hook
  const topNewsContext = useContext(TopNewsContext);
  const { loading, news } = topNewsContext;

  const classes = useStyles();

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          {news.map((newsitem) => (
            <Grid
              container
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
              xl={2}
              key={newsitem.title}
            >
              <NewsItem news={newsitem} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
};

export default News;
