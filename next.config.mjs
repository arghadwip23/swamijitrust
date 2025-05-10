/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "*.supabase.co",
            pathname: "/storage/v1/object/public/**",
          },
          {
            protocol: "https",
            hostname: "avatar.iran.liara.run",
            pathname: "/**",
          }
         
        ],
      },
};

export default nextConfig;
