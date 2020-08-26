import React from 'react';
import { connect } from 'react-redux';

const Comic = ({ currentComic, isLightTheme, themes }) => {
  const theme = isLightTheme ? themes.light : themes.dark;
  const img = `${currentComic.thumbnail.path}.${currentComic.thumbnail.extension}`
  
  return (
    
    <div className="comicListContainer">
      
            <div>
              <img
                src={img}
                className="imagenComic"
                alt="imagen comic"
              ></img>
            </div>
        
            <div
              style={{ color: theme.letter, fontWeight: theme.weight }}
              className="comicCharacter"
            >
              *{currentComic.title}
            </div>
         
     
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLightTheme: state.data.isLightTheme,
  themes: state.data.themes,
});

export default connect(mapStateToProps)(Comic);
