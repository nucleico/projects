import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { connect } from 'react-redux';
import NoStats from './NoStats';
import NoPlayerSelected from './NoPlayerSelected';

const PositionDonut = ({ statsToggle, currentPlayer }) => {
  const initialState = {
    puntaIzquierda: 0,
    puntaDerecha: 0,
    ladoIzquierdo: 0,
    ladoDerecho: 0,
    frente: 0,
  };
  const [position, setPosition] = useState(initialState);
  const [donut, setDonut] = useState({
    options: {
      title: {
        text: '',
      },
      labels: [
        'Punta Izquierda',
        'Punta Derecha',
        'Lado Izquierdo',
        'Lado Derecho',
        'Frente',
      ],
    },
    series: [0, 0, 0, 0, 0],
  });

  useEffect(() => {
    setPosition(initialState);

    currentPlayer.forEach((shot) => {
      switch (shot.position) {
        case 'Punta Izquierda': {
          setPosition((prevState) => ({
            ...prevState,
            puntaIzquierda: prevState.puntaIzquierda + 1,
          }));
          break;
        }
        case 'Punta Derecha': {
          setPosition((prevState) => ({
            ...prevState,
            puntaDerecha: prevState.puntaDerecha + 1,
          }));
          break;
        }
        case 'Lado Derecho': {
          setPosition((prevState) => ({
            ...prevState,
            ladoDerecho: prevState.ladoDerecho + 1,
          }));
          break;
        }
        case 'Lado Izquierdo': {
          setPosition((prevState) => ({
            ...prevState,
            ladoIzquierdo: prevState.ladoIzquierdo + 1,
          }));
          break;
        }
        default: {
          setPosition((prevState) => ({
            ...prevState,
            frente: prevState.frente + 1,
          }));
        }
      }
    });
    //eslint-disable-next-line
  }, [currentPlayer]);

  useEffect(() => {
    setDonut((prevState) => ({
      ...prevState,
      options: {
        ...prevState.options,
        title: {
          text:
            currentPlayer[0] &&
            `Posiciones de tiro de ${currentPlayer[0].shooter}`,
        },
      },
      series: [
        position.puntaIzquierda,
        position.puntaDerecha,
        position.ladoIzquierdo,
        position.ladoDerecho,
        position.frente,
      ],
    }));
    //eslint-disable-next-line
  }, [position]);

  return statsToggle && currentPlayer.length > 0 ? (
    <div className="donut">
      <Chart
        options={donut.options}
        series={donut.series}
        type="donut"
        width="380"
      />
    </div>
  ) : statsToggle && currentPlayer.length === 0 ? (
    <NoStats />
  ) : (
    <NoPlayerSelected />
  );
};

const mapStateToProps = (state) => ({
  statsToggle: state.basket.statsToggle,
  currentPlayer: state.basket.currentPlayerShots,
});

export default connect(mapStateToProps, null)(PositionDonut);
