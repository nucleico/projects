import React, { Fragment }  from 'react';
import './styles/styles.css';
import CardList from './components/CardList';
import ComicList from './components/ComicList';
import SearchBar from './components/SearchBar';
import FavList from './components/FavList';
import { connect } from 'react-redux';
import { toggleTheme } from "./actions/dataActions"

const App = ({ isLightTheme, themes }) => {
  
  const theme = isLightTheme ? themes.light : themes.dark;
  document.body.style.backgroundColor = theme.back;

  return (
        <Fragment>
          <SearchBar />
          <CardList />
          <ComicList />          
          <FavList />       
        </Fragment>
    );
  }

const mapStateToProps = (state) => ({  
  isLightTheme: state.data.isLightTheme,
  themes: state.data.themes,
})

export default connect(mapStateToProps, { toggleTheme })(App);
