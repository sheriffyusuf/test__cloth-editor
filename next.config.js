const nextTranslate = require("next-translate");

module.exports = nextTranslate({
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["source.unsplash.com"],
  },
});
