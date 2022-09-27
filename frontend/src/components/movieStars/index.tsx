import React from 'react';
import { ReactComponent as StarFull } from '../../assets/fullStar.svg';
import { ReactComponent as StarHalf } from '../../assets/halfStar.svg';
import { ReactComponent as StarEmpty } from '../../assets/emptyStar.svg';

import "./styles.css";



export default function MovieStars() {
    return (
        <div className="dsmovie-stars-container">
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
            <StarEmpty />
        </div>
    )
}
