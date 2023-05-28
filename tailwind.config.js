/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "576px",
      md: "960px",
      lg: "1440px",
    },
    extend: {
      fontFamily: {
        ProximaNovaThin: ["ProximaNovaThin"],
        ProximaNovaScOsfThin: ["ProximaNovaScOsfThin", "sans-serif"],
        ProximaNovaRegular: ["ProximaNovaRegular", "sans-serif"],
        ProximaNovaAltCondensedSemibold: [
          "ProximaNovaAltCondensedSemibold",
          "sans-serif",
        ],
        ProximaNovaAltSemibold: ["ProximaNovaAltSemibold", "sans-serif"],
        ProximaNovaAltBold: ["ProximaNovaAltBold", "sans-serif"],
        ProximaNovaBlack: ["ProximaNovaBlack", "sans-serif"],
      },
      colors: {
        "mv-primary": {
          0: "#0047BB",
          1: "#4285f4",
          2: "#1877f2",
          3: "#055BD8",
          4: "#151E51",
        },
        "mv-secondary": {
          0: "#40C1AC",
          1: "#7BFFE6",
          2: "#22FFD5",
          3: "#00E2B7",
          4: "#108972",
        },
        "mv-gray": {
          0: "#1C1C1C",
          1: "#8A8A8A",
          2: "#505050",
          3: "#383838",
          4: "#000000",
        },
        "mv-white": {
          0: "#F2F2F2",
          1: "#FCFCFC",
          2: "#F4F5F5",
          3: "#D9D9D9",
          4: "#BFBFBF",
        },
      },
      boxShadow: {
        "gradient": "-15px -5px 100px -10px #40C1AC, 5px 15px 70px -20px #0047BB",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mythemes: {
          primary: "#0047BB",
          secondary: "#40C1AC",
          // accent: "#d1f49c",
          // neutral: "#231E24",
          // info: "#4980EE",
          success: "#4285f4",
          warning: "#F0CA4C",
          error: "#DE3A2B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
