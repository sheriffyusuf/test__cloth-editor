import withPlugins from "next-compose-plugins";
import nextTranslate from "next-translate";

export default withPlugins([nextTranslate()], {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["source.unsplash.com"],
  },
});
