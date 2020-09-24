import React, { Fragment } from 'react';
import './styles/styles.css';
import CardList from './components/card/CardList';
import ComicList from './components/comic/ComicList';
import SearchBar from './components/layout/SearchBar';
import FavList from './components/fav/FavList';
import CommentModal from './components/comments/CommentModal';
import { connect } from 'react-redux';
import { toggleTheme } from './actions/dataActions';

const App = ({ isLightTheme, themes }) => {
  const theme = isLightTheme ? themes.light : themes.dark;
  document.body.style.backgroundColor = theme.back;

  return (
    <Fragment> {/*sdf*/}
      <SearchBar />
      <CardList />
      <ComicList />
      <FavList />
      <CommentModal />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  isLightTheme: state.data.isLightTheme,
  themes: state.data.themes,
});

export default connect(mapStateToProps, { toggleTheme })(App);
