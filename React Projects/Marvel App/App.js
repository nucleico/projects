import React  from 'react';
import './styles/styles.css';
import { AnimatePresence } from 'framer-motion';
import CardList from './components/CardList';
import ComicList from './components/ComicList';
import SearchBar from './components/SearchBar';
import FavList from './components/FavList';
import { connect } from 'react-redux';
import { toggleTheme } from "./actions/dataActions"

const App = ({comicListToggle, favListToggle, isLightTheme, themes }) => {
  
  const theme = isLightTheme ? themes.light : themes.dark;
  document.body.style.backgroundColor = theme.back;

    return (
        <div>
        <SearchBar />
        <CardList />

        <AnimatePresence>
          {comicListToggle && <ComicList />}          
        </AnimatePresence>

        <AnimatePresence>
          {favListToggle && <FavList />}
        </AnimatePresence>
        </div>
    );
  }


const mapStateToProps = (state) => ({
  favListToggle: state.data.favListToggle,
  comicListToggle: state.data.comicListToggle,
  isLightTheme: state.data.isLightTheme,
  themes: state.data.themes,
})

export default connect(mapStateToProps, { toggleTheme })(App);
