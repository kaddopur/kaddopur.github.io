import React from 'react';
import './Card.css';

const Card = (props) => {
  const cover = 'https://s-media-cache-ak0.pinimg.com/736x/1f/52/3a/1f523af43d542103f99f9da712def3b3.jpg';
  const {
    title,
    count,
  } = props;
  let details = [];

  for (let i = 0; i < count; i++) {
    details.push(<p>asd;flkja sdf ;lkasdf ;laksjdf ;alskdjf ;alskdfj a;lsdkfj a;sldkfj a;sldkfj a</p>);
  }

  return (
    <article className="card">
      <div className="card-cover" style={{
        backgroundImage: `url(${cover})`,
      }} />
      <div className="card-details">
        <h1 className="card-title">{title}</h1>
        {details}
      </div>
    </article>
  );
};

export default Card;
