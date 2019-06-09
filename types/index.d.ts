import * as React from 'react';

export interface ChangeRatingHandler {
    (rating: number, name?: string): void;
}

export interface StarRatingsProps {
    rating: number;
    typeOfWidget: string;
    numberOfStars: number;
    changeRating: ChangeRatingHandler | null;
    starHoverColor: string;
    starRatedColor: string;
    starEmptyColor: string;
    starDimension: string;
    starSpacing: string;
    gradientPathName: string;
    ignoreInlineStyles: boolean;
    svgIconPath: string;
    svgIconViewBox: string;
    name?: string;
}

class StarRatings extends React.Component<StarRatingsProps> {
    static defaultProps = {
        rating: 0,
        typeOfWidget: 'Star',
        numberOfStars: 5,
        changeRating: null,
        starHoverColor: 'rgb(230, 67, 47)',
        starRatedColor: 'rgb(109, 122, 130)',
        starEmptyColor: 'rgb(203, 211, 227)',
        starDimension: '50px',
        starSpacing: '7px',
        gradientPathName: '',
        ignoreInlineStyles: false,
        svgIconPath: 'm25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z',
        svgIconViewBox: '0 0 51 48'
    }
}

export default StarRatings;
