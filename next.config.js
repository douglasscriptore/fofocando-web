module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "https://fofocando.herokuapp.com/:path*",
      },
    ];
  },
};
