/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true
    },
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
};

export default nextConfig;
