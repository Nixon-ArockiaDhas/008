import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep development runs focused on the application source. This disables
  // Next's optional editor/agent instruction-file generation.
  agentRules: false,
};

export default nextConfig;
