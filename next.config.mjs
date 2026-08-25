/** @type {import('next').NextConfig} */

// Security headers configuration
const securityHeaders = [
  // HSTS - Enforces HTTPS for 2 years, includes subdomains, and enables preload
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Content Security Policy - Controls resources the browser is allowed to load
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' blob: data:",
      "font-src 'self'",
      "connect-src 'self'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
  // Prevents MIME type sniffing
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // Controls how much referrer information is sent
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // Prevents clickjacking by controlling iframe embedding
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  // Controls browser features and APIs
  {
    key: "Permissions-Policy",
    value: [
      "camera=()",
      "microphone=()",
      "geolocation=()",
      "interest-cohort=()",
    ].join(", "),
  },
  // XSS Protection (legacy but still useful for older browsers)
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  // Prevents DNS prefetching to protect privacy
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  // Cross-Origin policies for enhanced isolation
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin",
  },
  {
    key: "Cross-Origin-Resource-Policy",
    value: "same-origin",
  },
  {
    key: "Cross-Origin-Embedder-Policy",
    value: "credentialless",
  },
];

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        // MTA-STS policy file - serve as plain text with proper caching
        source: "/.well-known/mta-sts.txt",
        headers: [
          ...securityHeaders,
          {
            key: "Content-Type",
            value: "text/plain; charset=utf-8",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=86400",
          },
        ],
      },
      {
        // Apply security headers to all routes
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
