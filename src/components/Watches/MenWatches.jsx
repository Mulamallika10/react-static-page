import React from 'react';

export default function MenWatches(props) {
    const { title, image1, image2, image3, image4, image5,image6,image7 } = props.mwobj;
    return (
        <div>
            <h2>Men's watches</h2>
            <div class="MenImages">
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
