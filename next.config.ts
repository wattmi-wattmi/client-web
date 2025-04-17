import type { NextConfig } from "next";
import withPWAInit from '@ducanh2912/next-pwa';

const with_pwa = withPWAInit({
    dest: 'public'
});

const nextConfig: NextConfig = with_pwa({
  /* config options here */
});

export default nextConfig;
