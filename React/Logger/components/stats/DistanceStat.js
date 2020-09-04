import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Chart from 'react-apexcharts';

const DistanceStat = ({ statsToggle, currentPlayer }) => {
  const [distance, setDistance] = useState([]);

  const [chart, setChart] = useState({
    options: {      
      tooltip: {          
        x: {
         show: false,         
           },
      y: {
        formatter: function(value) {
            return value + " mts"
        },
        title: {
          formatter: function() {
             return "Distancia: "            
         },
        }, 
      }
    },
      title: {
        text: '',
      },
      chart: {
        zoom: {
        enabled: false
      },
      },
      yaxis: {
        labels: {
          formatter: function(val, index) {
            return val.toFixed(0);
          },         
        }
      },
      xaxis: {
        labels: {
          show: false
      }
    },    
  },  
    series: [
      { 
        name: "Series 2",      
        data: [],
      },
    ],
  });

  useEffect(() => {
    setDistance([]);

    currentPlayer.forEach((shot) => {
      const num = parseInt(shot.distance);

      setDistance((prevState) => [...prevState, num]);

      //eslint-disable-next-line
    });
  }, [currentPlayer]);

  useEffect(() => {
    setChart((prevState) => ({
      ...prevState,
      options: {
        ...prevState.options,
        title: {
          text:
            currentPlayer[0] &&
            `Distancia de tiros de ${currentPlayer[0].shooter}`,
        },
      },
      series: [
        {...prevState.series, data: distance}
      ]
    }));
    //eslint-disable-next-line
  }, [distance]);

  return statsToggle && currentPlayer.length > 0 ? (
    <div className="donut" style={{marginTop: "25px"}}>
      <Chart
        options={chart.options}
        series={chart.series}
        type="line"
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

export default connect(mapStateToProps, null)(DistanceStat);
