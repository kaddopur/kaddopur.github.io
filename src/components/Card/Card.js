import React from 'react';
import './Card.css';

const Card = (props) => {
  const {
    content,
    cover,
    link,
    title,
  } = props;

  const coverStyle = {
    backgroundImage: `url(${cover})`,
  };

  return (
    <a className="card" href={link} target="_blank">
      <div className="card-cover" style={coverStyle} />
      <div className="card-details">
        <h1 className="card-title">{title}</h1>
        <p>{content}</p>
      </div>
    </a>
  );
};

export default Card;
