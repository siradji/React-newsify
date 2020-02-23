import React from 'react';
import { useReducer, useEffect } from 'react';

import axios from 'axios';
import TopNewsContext from './topNewsContext';
import TopNewsReducer from './topNewsReducer';

import { SET_LOADING, DISPLAY_NEWS } from '../types';

const TopNewsState = (props) => {
  const initialState = {
    news: [],
    loading: false
  };

  const [state, dispatch] = useReducer(TopNewsReducer, initialState);

  // display news
  const displayNews = async () => {
    setLoading();
    try {
      const res = await axios.get(
        `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.API_KEY}`
      );

      dispatch({
        type: DISPLAY_NEWS,
        payload: res.data.results
      });
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    displayNews();
  }, []);

  // set loading
  const setLoading = () => dispatch({ type: SET_LOADING });
  return (
    <TopNewsContext.Provider
      value={{
        news: state.news,
        loading: state.loading
      }}
    >
      {props.children}
    </TopNewsContext.Provider>
  );
};

export default TopNewsState;
