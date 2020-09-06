import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ShotItem from './ShotItem';
import Spinner from '../layout/Spinner';
import logo from '../../img/nbaLogo.png';
import { getData, setLoading } from '../../actions/basketActions';
import Pagination from './Pagination';

const ShotsList = ({ getData, shots, loading, setLoading }) => {
  const [shotsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * shotsPerPage;
  const indexOfFirstPost = indexOfLastPost - shotsPerPage;
  const currentShots = shots.slice(indexOfFirstPost, indexOfLastPost);

  const shotComponent = currentShots.map((shot) => {
    return <ShotItem shot={shot} key={shot.id} />;
  });

  useEffect(() => {
    setLoading();
    getData();
  }, [getData, setLoading]);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div>
        <ul className="collection with-header">
          <li className="collection-header blue-grey">
            <img className="nba-logo" src={logo} alt="nba-logo" />
            <h4 className="center white-text shotsTitle">TIROS</h4>
          </li>
          {shots.length === 0 ? (
            <p className="center">No hay tiros para mostrar</p>
          ) : (
            <div>
              {shotComponent}
              <Pagination
                currentPage={currentPage}
                shotsPerPage={shotsPerPage}
                totalShots={shots.length}
                setCurrentPage={setCurrentPage}
              />
            </div>
          )}
        </ul>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  shots: state.basket.shots,
  loading: state.basket.loading,
});

export default connect(mapStateToProps, { getData, setLoading })(ShotsList);
