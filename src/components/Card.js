import React from 'react';

const Card = (props) => {
  const pinImg = process.env.PUBLIC_URL + '/images/pin.png';

  const {
    title,
    location,
    googleMapsUrl,
    startDate,
    endDate,
    description,
    imageUrl,
  } = props;

  console.log(imageUrl);

  return (
    <main className='travel-card'>
      <div className='travel-img-container'>
        <img src={imageUrl} alt={title} className='travel-img' />
      </div>
      <div>
        <div className='travel-loc-section'>
          <img src={pinImg} className='travel-pin' />
          <p className='travel-location'>{location}</p>
          <a href={googleMapsUrl} className='travel-map-link'>
            View on Google Maps
          </a>
        </div>
        <div className='travel-content'>
          <h1 className='travel-title'>{title}</h1>
          <h3 className='travel-date'>{`${startDate} - ${endDate}`}</h3>
          <p className='travel-desc'>{description}</p>
        </div>
      </div>
      <div className='card-border'></div>
    </main>
  );
};

export default Card;
