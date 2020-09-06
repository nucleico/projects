import React from 'react'
import { connect } from "react-redux"

const NoPlayerSelected = ({loading}) => {
    if (loading) {
      return ""
     } else {
       return (
        <div className="container" style={{width: "200%"}}>
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">              
              <p>Seleccione un jugador desde el botón verde del menú lateral para ver estadísticas</p>
            </div>          
          </div>
        </div>
      </div>
    )
     } 
}

const mapStateToProps = state => ({
  loading: state.basket.loading
})

export default connect(mapStateToProps, null)(NoPlayerSelected)