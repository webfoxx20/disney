module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "Login-background": "url('./assest/images/login-background.jpg')",
        "body-background": "url('./assest/images/home-background.png')",
        "body-details": "url('./assest/images/details.jpg')",
      },
      backgroundColor: {
        "pry-bg": "#040714",
      },
      colors: {
        "pry-clr": "#f9f9f9f",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        "5x": "repeat(auto-fit, minmax(200px, 1fr))",
        "4x": "repeat(auto-fit, minmax(200px, 1fr))",
      },
    },
  },
  plugins: [],
};
