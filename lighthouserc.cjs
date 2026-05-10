/** @type {import('@lhci/cli').Config} */
module.exports = {
  ci: {
    collect: {
      // Starts Vike preview server (dist must exist from prior build step)
      startServerCommand: "npx vike preview",
      startServerReadyPattern: "Local",
      startServerReadyTimeout: 30000,
      url: [
        "http://localhost:3000/",
        "http://localhost:3000/todo",
        "http://localhost:3000/demo-ssr",
        "http://localhost:3000/demo-mixed",
      ],
      numberOfRuns: 3,
      settings: {
        chromeFlags: "--no-sandbox --headless --disable-gpu",
        // Desktop preset for consistent CI results
        preset: "desktop",
      },
    },
    assert: {
      assertions: {
        // Minimum 90% on all categories
        "categories:performance": ["error", { minScore: 0.9 }],
        "categories:accessibility": ["error", { minScore: 0.9 }],
        "categories:best-practices": ["error", { minScore: 0.9 }],
        "categories:seo": ["error", { minScore: 0.9 }],
      },
    },
    upload: {
      // Store reports as CI artifacts instead of external server
      target: "filesystem",
      outputDir: ".lighthouseci",
    },
  },
};
