import React from 'react';

const Card = ({ front, back, image, isFlipped, onFlip, feedback }) => {
    return (
        <div 
            className={`card ${isFlipped ? 'flipped' : ''}`} 
            onClick={onFlip}
            style={{ cursor: onFlip ? 'pointer' : 'default' }}
        >
            <div className="card-inner">
                <div className="card-front">
                    <div className="card-content">
                        <img src={image} alt={front} className="card-image" />
                        <p className="card-text">{front}</p>
                    </div>
                </div>
                <div className="card-back">
                    <div className="card-content">
                        <img src={image} alt={back} className="card-image" />
                        <p className="card-text">{back}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;