/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    myEnv: process.env.TEST_MY_ENV,
  }
}

module.exports = nextConfig
