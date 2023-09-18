module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // Specify the files to process.
  theme: {
    extend: {}, // Extend the default theme or add custom styles here.
  },
  plugins: [],
  experimental: {
    scrollbarWidth: true,
  }, // Add any Tailwind CSS plugins here.
}
