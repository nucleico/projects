import React from 'react';
import Ficha from './Ficha';

const CardList = props => {
  const cardComponent = props.tenistas.map((user, i) => {
    return (
      <Ficha
        id={props.tenistas[i].id}
        name={props.tenistas[i].name}
        skill={props.tenistas[i].skill}
        country={props.tenistas[i].country}
        ranking={props.tenistas[i].ranking}
        key={i + 1}
      />
    );
  });

  return <div>{cardComponent}</div>;
};

export default CardList;
