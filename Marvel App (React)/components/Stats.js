import React, { Component } from 'react';

class Stats extends Component {
  render() {
    return (
      <div className="statsContainer">
        <div className="statsAtt">
          <h2>
            Strength:{' '}
            <div className="attrBar">
              <div
                className="pointsBar"
                style={{ width: this.props.powerPoints }}
              ></div>
            </div>
          </h2>

          <h2>
            Speed:{' '}
            <div className="attrBar">
              <div
                className="pointsBar"
                style={{ width: this.props.speedPoints }}
              ></div>
            </div>
          </h2>

          <h2>
            Resistance:{' '}
            <div className="attrBar">
              <div
                className="pointsBar"
                style={{ width: this.props.resPoints }}
              ></div>
            </div>
          </h2>
        </div>
      </div>
    );
  }
}

export default Stats;
