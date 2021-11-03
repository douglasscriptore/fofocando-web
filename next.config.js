// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "https://fofocando.herokuapp.com/",
      },
    ];
  },
};
