/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: "standalone",
    generateBuildId: async () => {
        // used to generate consistent build outputs between build executions (for example: pipeline stages)
        // https://nextjs.org/docs/pages/api-reference/next-config-js/generateBuildId
        // https://github.com/vercel/next.js/blob/4efe14238b5ab11935e73aa09631ef5ec8045b13/packages/next/src/build/generate-build-id.ts
        console.log(`NEXTJS_CUSTOM_BUILD_ID=${process.env.NEXTJS_CUSTOM_BUILD_ID}`);
        return process.env.NEXTJS_CUSTOM_BUILD_ID || null;
    }
};

export default nextConfig;
