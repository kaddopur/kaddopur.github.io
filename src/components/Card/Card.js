import React from 'react';
import classnames from 'classnames';
import './Card.css';

const Card = props => {
  const { content, cover, link, title } = props;

  const cardClass = classnames('card', {
    fallback: !link,
  });

  const coverStyle = {
    backgroundImage: `url(${cover})`,
  };

  return (
    <a className={cardClass} href={link} target="_blank">
      <div className="card-cover" style={coverStyle} />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <div>{content}</div>
      </div>
    </a>
  );
};

export default Card;
