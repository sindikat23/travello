/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig = {};

const intlPlugin = createNextIntlPlugin()

export default intlPlugin(nextConfig);
