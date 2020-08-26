import React, { useState } from 'react';
import { connect } from 'react-redux';
import { toggleFavCharacter, addCurrent } from '../../actions/dataActions';

const BackCard = ({
  addCurrent,
  toggleFavCharacter,
  favList,
  personajeData: { name, id, thumbnail },
}) => {
  const [powerPoints] = useState(Math.ceil(Math.random() * 98));
  const [speedPoints] = useState(Math.ceil(Math.random() * 98));
  const [resPoints] = useState(Math.ceil(Math.random() * 98));

  const img = `${thumbnail.path}.${thumbnail.extension}`;

  const makeFav = (e) => {
    e.stopPropagation();
    toggleFavCharacter(name, img, id);
  };

  const commentModal = (e) => {
    e.stopPropagation();
    addCurrent({ name, id });
  };

  return (
    <div className="statsContainer">
      <i
        className={`favIcon ${
          favList.includes(id) ? `fas fa-heart` : `far fa-heart`
        }`}
        onClick={makeFav}
      />

      <h2 className="nameBackCard">{name}</h2>

      <div className="statsAtt">
        <div className="attrContainer">
          <h2>Strength</h2>
          <div className="attrBar">
            <div className="pointsBar" style={{ width: powerPoints }} />{' '}
          </div>
        </div>

        <div className="attrContainer">
          <h2>Speed</h2>
          <div className="attrBar">
            <div className="pointsBar" style={{ width: speedPoints }} />{' '}
          </div>
        </div>

        <div className="attrContainer">
          <h2>Resistance</h2>
          <div className="attrBar">
            <div className="pointsBar" style={{ width: resPoints }} />{' '}
          </div>
        </div>
      </div>
      <button onClick={commentModal} className="commentBtn">
        Leave a Comment!
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  favList: state.data.favList,
  current: state.data.current,
});

export default connect(mapStateToProps, {
  toggleFavCharacter,
  addCurrent,
})(BackCard);
