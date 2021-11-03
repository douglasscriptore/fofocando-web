// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "https://fofocando.herokuapp.com/:path*",
      },
    ];
  },
};
