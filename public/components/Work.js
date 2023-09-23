import React from 'react';

function Work({ id, title, description, image, openPopup }) {
  return (
    <article
      id={id}
      className="past-work"
      onClick={() => openPopup(id, title, image)}
    >
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export default Work;