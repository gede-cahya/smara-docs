/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        smara: {
          bg: "#0a0a0a",
          bg2: "#0f1a0f",
          green: "#bef264",
          green2: "#84cc16",
          green3: "#65a30d",
          text: "#f5f5f5",
          muted: "#a3a3a3",
          card: "#111111",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 20px -5px rgba(190,242,100,0.15)",
            borderColor: "rgba(190,242,100,0.2)",
          },
          "50%": {
            boxShadow: "0 0 40px -5px rgba(190,242,100,0.3)",
            borderColor: "rgba(190,242,100,0.4)",
          },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
