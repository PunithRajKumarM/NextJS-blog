/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    mongodb_username: "punithrajkumar496",
    mongodb_password: "punithrajkumar496",
    mongodb_clustername: "cluster0",
    mongodb_database: "my-site",
  },
};

module.exports = nextConfig;
