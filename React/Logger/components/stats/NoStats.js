import React from 'react'

const NoStats = () => {
    return (
        <div className="container" style={{width: "160%"}}>
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">              
              <p>No hay tiros para el jugador seleccionado.</p>
            </div>          
          </div>
        </div>
      </div>
    )
}

export default NoStats
