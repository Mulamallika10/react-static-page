import React from 'react';

export default function WCategories(props) {

    const { title, image1, image2, image3, image4, image5, image6,image7 } = props.womenObj;
    return (
        <div className='MensCollection'>
            <h2>Women Collection</h2>
            <div className='MenImages'>
                <img src={image1} alt={title} />
                <img src={image2} alt={title} />
                <img src={image3} alt={title} />
                <img src={image4} alt={title} />
                <img src={image5} alt={title} />
                <img src={image6} alt={title} />
                <img src={image7} alt={title} />
            </div>

        </div>
    );
}
