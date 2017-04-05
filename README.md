# React Star Ratings

> Customizable react star ratings. SVG stars that show aggregate star ratings to the hundreths decimal point.

## Install

```shell
npm install --save react-star-ratings
```

## Demo

### [codepen playground](https://codepen.io/ekeric13/project/full/DkJYpA/)

## Usage

```js
import StarRatings from './react-star-ratings';

class Foo extends Component {
    changeRating( newRating ) {
      this.setState({
        rating: newRating
      });
    }

    render() {
      // rating = 2;
      return (
        <StarRatings
          rating={rating}
          isSelectable={true}
          isAggregateRating={false}
          changeRating={this.changeRating}
          numOfStars={ 6 }
        />
      );
    }
}


class Bar extends Component {
  render() {
    // aggregateRating = 2.35;
    return (
      <StarRatings
        rating={ aggregateRating }
        isSelectable={ false }
        isAggregateRating={ true }
        numOfStars={ 6 }
      />
    );
  }
}
```

## API

| Prop | Type | Default | Description | Example |
| ---- | ---- | ------- | ----------- | ------- |
| rating | number | 0 | The user's rating. Number of stars to highlight. | `3` |
| numOfStars | number | 5 | The max number of stars to choose from or to display | `6` |
| changeRating | function | ()=>{} | Callback that will be passed the new rating a user selects | `const setNewRating = (rating) => this.props.dispatch( fooActions.setRating(rating) )` |
| isSelectable | boolean | false | Determines whether user can select a new rating or whether the stars are just for display | `true` |
| isAggregateRating | boolean | true | Determines whether stars' will show a fraction of a star (.5 stars) | `false` |
| starSelectingHoverColor | string | 'rgb(230, 67, 47)' | Color of star when hovering over it in selection mode | `yellow` |
| starRatedColor | string | 'rgb(109, 122, 130)' | Color of stars that the user has rated | `black` |
| starEmptyColor | string | 'rgb(203, 211, 227)' | Color of stars that the use hasn't rated | `grey` |
| starWidthAndHeight | string | '50px' | The width and height of the star | `15px` |
| starSpacing | string | '7px' | The spacing between the stars | `0` |
| gradientPathName | string | '' | gradientPathname needed if app's path is not at the root | `/app/` |


## Browser Support

Supports Chrome, firefox, safari, edge, and ie 9+.
The star is SVG, so this library fails for any browser that doesn't support svg.