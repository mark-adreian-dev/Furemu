/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
            protocol: 'https',
            hostname: 'cdn.myanimelist.net',
            pathname: '**',
            port: ''
            },
        ],
    },
    reactStrictMode: false
};

export default nextConfig;
