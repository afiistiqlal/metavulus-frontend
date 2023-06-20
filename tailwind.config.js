/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      QuicksandLight: ["QuicksandLight"],
      QuicksandRegular: ["QuicksandRegular"],
      QuicksandMedium: ["QuicksandMedium"],
      QuicksandSemibold: ["QuicksandSemibold"],
      QuicksandBold: ["QuicksandBold"],
      RobotoLight: ["RobotoLight"],
      RobotoRegular: ["RobotoRegular"],
      RobotoMedium: ["RobotoMedium"],
      RobotoSemibold: ["RobotoSemibold"],
      RobotoBold: ["RobotoBold"],
    },
    extend: {
      maxWidth: {
        main: "1440px",
      },
      colors: {
        "mv-primary": {
          1: "#78D64B",
          6: "#A7E48A",
          5: "#84D95C",
          4: "#62CE2E",
          3: "#55B328",
          2: "#224910",
        },
        "mv-secondary": {
          1: "#FF9800",
          6: "#FFC268",
          5: "#FFAE37",
          4: "#F49100",
          3: "#D47E00",
          2: "#B36B00",
        },
        "mv-gray": {
          1: "#1C1C1C",
          2: "#666666",
          3: "#8A8A8A",
          4: "#505050",
          5: "#383838",
          6: "#000000",
        },
        "mv-white": {
          1: "#F2F2F2",
          2: "#FCFCFC",
          3: "#F4F5F5",
          4: "#F4F7FF",
          5: "#e2e2e2",
          6: "#D9D9D9",
          7: "#BFBFBF",
        },
      },
      boxShadow: {
        gradient: "-15px -5px 100px -10px #78D64B, 5px 15px 70px -20px #A7E48A",
        blur: "0px 0px 10000px 100px #f1f1f1",
      },
      backgroundImage: {
        hero: "url('/images/herobg.png')",
        arrow: "url('/images/arrow.png')",
        auth: "url('/images/authbanner.jpg')",
        aboutusheader: "url('/images/aboutusheaderbg.png')",
        aboutusfooter: "url('/images/aboutusfooterbg.png')",
        contactus: "url('/images/contactus.png')",
      },
    },
  },
  plugins: [],
};
