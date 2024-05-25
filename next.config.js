/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: process.env.GOOGLE_CAPTCHA_KEY,
    BACKEND_API: process.env.BACKEND_API,
  }
};

module.exports = nextConfig;
