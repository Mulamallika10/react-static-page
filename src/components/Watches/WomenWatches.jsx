import React from 'react';

export default function WomenWatches(props) {
    const {title,i1,i2,i3,i4,i5,i6,i7}=props.wobj;
  return (
    <div>
        <h2>Women's Watches</h2>
        <div className='MenImages'>
            <img src={i1} alt={title} />
            <img src={i2} alt={title} />
            <img src={i3} alt={title} />
            <img src={i4} alt={title} />
            <img src={i5} alt={title} />
            <img src={i6} alt={title} />
            <img src={i7} alt={title} />

        </div>
    
    </div>
  );
}
