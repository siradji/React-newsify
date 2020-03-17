import React, { useContext } from 'react';
import TopNewsContext from '../Context/TopNews/topNewsContext';

import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import { Button, Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/Styles';

import Styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(4)
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  topSection: {
    height: '80vh',
    display: 'flex',
    justifyContent: 'space-evenly',
    marginBottom: '2.5em'
  },
  img: {
    height: '80vh',
    Width: '100%'
  },
  imgContainer: {
    position: 'relative'
  },
  imgChild: {
    position: 'absolute',
    top: '50%',
    minHeight: '9em',
    maxHeight: '9em',
    width: '100%',
    padding: '1.5em 0.5em',
    background: '#000',
    opacity: '0.7'
  },
  chip: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    margin: '15px 0',
    color: 'white'
  },
  links: {
    textDecoration: 'none',
    color: '#fff'
  }
}));
const TopSection = () => {
  const classes = useStyles();
  const context = useContext(TopNewsContext);
  const { news, loading } = context;

  let image1;
  let image2;
  let url1;
  let url2;
  let title1;
  let title2;
  let section1;
  let section2;
  let subSection1;
  let subSection2;
  if (news.length > 1) {
    const media = news.map((news) => news);
    const img = media[6].multimedia;
    const img2 = media[10].multimedia;
    section1 = media[6].section;
    section2 = media[10].section;
    subSection1 = media[6].subsection;
    subSection2 = media[10].subsection;
    title1 = media[6].title;
    title2 = media[10].title;
    url1 = media[6].url;
    url2 = media[10].url;
    image1 = img[0].url;
    image2 = img2[0].url;
  }

  return !loading ? (
    <Hidden smDown={true}>
      <Container>
        {/* <Typography variant='h5' component='h5' className={classes.title}>
          Trending On New York Times
        </Typography> */}
        <div className={classes.topSection}>
          <div className={classes.imgContainer}>
            <img src={image1} className={classes.img} />
            <div className={classes.imgChild}>
              <Typography variant='h5' component='h5'>
                {title1}
              </Typography>
              <div className={classes.chip}>
                <Chip
                  variant='outlined'
                  color='primary'
                  style={{ padding: '0 25px', margin: '0 10px' }}
                  label={section1}
                />
                {subSection1 ? (
                  <Chip
                    variant='outlined'
                    style={{ padding: '0 25px', margin: '0 10px' }}
                    color='primary'
                    label={subSection1}
                  />
                ) : null}
              </div>
              <Button color='primary' variant='contained'>
                <a href={url1} className={classes.links}>
                  Read More
                </a>
              </Button>
            </div>
          </div>
          <div className={classes.imgContainer}>
            <img src={image2} className={classes.img} />
            <div className={classes.imgChild}>
              <Typography variant='h6' component='h6'>
                {title2}
              </Typography>
              <div className={classes.chip}>
                <Chip
                  variant='outlined'
                  color='primary'
                  style={{ padding: '0 25px', margin: '0 10px' }}
                  label={section2}
                />
                {subSection2 ? (
                  <Chip
                    variant='outlined'
                    style={{ padding: '0 25px', margin: '0 10px' }}
                    color='primary'
                    label={subSection2}
                  />
                ) : null}
              </div>
              <Button color='primary' variant='contained'>
                <a href={url2} className={classes.links}>
                  Read More
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Hidden>
  ) : null;
};

const Container = Styled.div`
max-width: 98%;
margin:auto;
overflow:hidden; 


`;
export default TopSection;
