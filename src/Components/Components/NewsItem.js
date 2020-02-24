import React from 'react';
import PropTypes from 'prop-types';

// Importing Material UI
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typnography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core';

//  Initializing MakeStyles
const useStyles = makeStyles({
  card: {
    minWidth: 200,
    background: 'transparent',
    paddingBottom: 30,
    color: 'white'
  },
  img: {
    maxHeight: '250px',
    minHeight: '250px'
  },
  chip: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    margin: '15px 0'
  },
  links: {
    textDecoration: 'none',
    color: '#fff'
  },
  cardContent: {
    minHeight: 70
  }
});
const NewsItem = ({ news }) => {
  const classes = useStyles();
  const media = news.multimedia.map((img) => img);
  const img = media.map((img, index) => {
    return img.url;
  });

  const image = img[4];
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.img}
          component='img'
          src={image}
          title={news.title}
        />
        <CardContent className={classes.cardContent}>
          <Typnography variant='h6' component='p' gutterBottom>
            {news.title}
          </Typnography>
          <Typnography variant='caption' component='p'>
            {news.abstract}
          </Typnography>
        </CardContent>
        <div className={classes.chip}>
          <Chip
            variant='outlined'
            color='primary'
            style={{ padding: '0 25px', margin: '0 10px' }}
            label={news.section}
          />
          {news.subsection ? (
            <Chip
              variant='outlined'
              style={{ padding: '0 25px', margin: '0 10px' }}
              color='primary'
              label={news.subsection}
            />
          ) : null}
        </div>
      </CardActionArea>
      <CardActions>
        <Button color='primary' variant='contained'>
          <a href={news.url} className={classes.links}>
            Read More
          </a>
        </Button>
      </CardActions>
    </Card>
  );
};

NewsItem.propTypes = {
  news: PropTypes.object.isRequired
};

export default NewsItem;
