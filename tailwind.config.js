/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        morph: {
          "0%": { borderRadius: "30% 60% 70% 30% / 40% 40% 60% 50%" },
          "34%": { borderRadius: "70% 30% 50% 50% / 30% 30% 70% 70%" },
          "67%": { borderRadius: "100% 60% 60% 100% / 100% 100% 60% 60%" },
          "100%": { borderRadius: "30% 60% 70% 30% / 40% 40% 60% 50%" },
        },
      },
      animation: {
        morphing: "morph 3s linear infinite",
      },
    },
  },
  plugins: [],
};
