/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "360px",
      md: "960px",
      lg: "1440px",
    },
    fontFamily: {
      QuicksandLight: ["QuicksandLight"],
      QuicksandRegular: ["QuicksandRegular"],
      QuicksandMedium: ["QuicksandMedium"],
      QuicksandBold: ["QuicksandBold"],
      QuicksandSemibold: ["QuicksandSemibold"],
      RobotoLight: ["RobotoLight"],
      RobotoRegular: ["RobotoRegular"],
      RobotoMedium: ["RobotoMedium"],
      RobotoBold: ["RobotoBold"],
      RobotoSemibold: ["RobotoSemibold"],
    },
    extend: {
      colors: {
        "mv-primary": {
          0: "#78D64B",
          1: "#A7E48A",
          2: "#84D95C",
          3: "#62CE2E",
          4: "#55B328",
          5: "#224910",
        },
        "mv-secondary": {
          0: "#FF9800",
          1: "#FFC268",
          2: "#FFAE37",
          3: "#F49100",
          4: "#D47E00",
          5: "#B36B00",
        },
        "mv-gray": {
          0: "#1C1C1C",
          1: "#666666",
          2: "#8A8A8A",
          3: "#505050",
          4: "#383838",
          5: "#000000",
        },
        "mv-white": {
          0: "#F2F2F2",
          1: "#FCFCFC",
          2: "#F4F5F5",
          3: "#e2e2e2",
          4: "#D9D9D9",
          5: "#BFBFBF",
        },
      },
      boxShadow: {
        gradient: "-15px -5px 100px -10px #40C1AC, 5px 15px 70px -20px #0047BB",
      },
    },
  },
  plugins: [],
};
