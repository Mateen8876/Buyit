import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

export const getRating = rating => {
  const ratingStar = [];
  const fullStar = <FontAwesome name="star" size={10} color="#ffa41c" />;
  const halfStar = (
    <FontAwesome name="star-half-empty" size={10} color="#ffa41c" />
  );
  const emptyStar = <FontAwesome name="star-o" size={10} color="#ffa41c" />;

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      ratingStar.push(fullStar);
    } else {
      ratingStar.push(emptyStar);
    }
  }
  if (rating % 1 !== 0) {
    ratingStar[Math.floor(rating)] = halfStar;
  }
  return ratingStar;
};

export const getProductFromApi = () => {
  return fetch('https://reactnative.dev/movies.json')
    .then(response => response.json())
    .then(json => {
      return json.movies;
    })
    .catch(error => {
      console.error(error);
    });
};





