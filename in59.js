// This reference to the object that execute the current function

// 1.

// const video = {
//   title: "a",
//   play() {
//     console.log(this);
//   },
// };

// function Video(title) {
//   this.title = title;
//   console.log(this);
// }

// const v = new Video("b"); // {}

// VERY VER IMP

// 2.

// const video = {
//   title: "a",
//   tags: [1, 2, 3, 4],
//   showTags() {
//     this.tags.forEach(function (tag) {
//       console.log(this, tag); // window object BECAUSE method have another callback function that reference this to global object
//     });
//   },
// };
// const v = new Video("b"); // {}

// 3.

const video = {
  title: "a",
  tags: [1, 2, 3, 4],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag);
    }, this);
  },
};

video.showTags(); // {}
