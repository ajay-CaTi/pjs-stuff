const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 3.5 },
  { title: "c", year: 2018, rating: 4.7 },
  { title: "d", year: 2015, rating: 1.5 },
];

// movies 2018 rating > 4
// deceding
// title

// 1.

// const data = movie(movies);
// console.log(data);
// const so = data.sort((a, b) => {
//   return b.rating - a.rating;
// });

// let title = so.map((m) => m.title);
// console.log(title);
// console.log(so);

// function movie(movies) {
//   return movies.filter((ele) => {
//     return ele.year === 2018 && ele.rating > 4.0;
//   });
// }

const titles = movies
  .filter((m) => m.year === 2018 && m.rating >= 4.0)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map((m) => m.title);

console.log(titles);
