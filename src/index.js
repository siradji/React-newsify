import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import './index.css';
import '@babel/polyfill';

const root = document.getElementById('root');
ReactDom.render(<App />, root);
