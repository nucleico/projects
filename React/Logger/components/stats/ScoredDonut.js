import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { connect } from 'react-redux';

const ScoredDonut = ({ statsToggle, currentPlayer }) => {
  const initialState = {
    Sí: 0,
    No: 0,
  };
  const [scored, setScored] = useState(initialState);

  const [chart, setChart] = useState({
    options: {
      title: {
        text: '',
      },
      labels: ['Acierto', 'Fallo'],
    },
    series: [0, 0],
  });

  useEffect(() => {
    setScored(initialState);

    currentPlayer.forEach((shot) => {
      if (shot.scored === 'Sí') {
        setScored((prevState) => ({ ...prevState, Sí: prevState.Sí + 1 }));
      } else if (shot.scored === 'No') {
        setScored((prevState) => ({ ...prevState, No: prevState.No + 1 }));
      }
    });
    //eslint-disable-next-line
  }, [currentPlayer]);

  useEffect(() => {
    setChart((prevState) => ({
      ...prevState,
      options: {
        ...prevState.options,
        title: {
          text:
            currentPlayer[0] &&
            `Efectividad de tiro de ${currentPlayer[0].shooter}`,
        },
      },
      series: [scored.Sí, scored.No],
    }));
    //eslint-disable-next-line
  }, [scored]);

  return statsToggle && currentPlayer.length > 0 ? (
    <div className="donut">
      <Chart
        options={chart.options}
        series={chart.series}
        type="donut"
        width="335"
      />
    </div>
  ) : (
    ''
  );
};

const mapStateToProps = (state) => ({
  statsToggle: state.basket.statsToggle,
  currentPlayer: state.basket.currentPlayerShots,
});

export default connect(mapStateToProps, null)(ScoredDonut);
