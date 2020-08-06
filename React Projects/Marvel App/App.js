import React, { useContext} from 'react';
import './styles/styles.css';
import { ThemeContext } from './context/ThemeContext';
import { AnimatePresence } from 'framer-motion';
import CardList from './components/CardList';
import ComicList from './components/ComicList';
import SearchBar from './components/SearchBar';
import FavList from './components/FavList';
import { connect } from 'react-redux';

const App = ({comicListToggle, favListToggle}) => {

  const themeContext = useContext(ThemeContext)  
  const { isLightTheme, light, dark } = themeContext;
  const theme = isLightTheme ? light : dark;
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
  comicListToggle: state.data.comicListToggle
})

export default connect(mapStateToProps)(App);
