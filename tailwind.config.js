/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        colors: {
          primary: {
            100: "#D0E4FA",
            200: "#A2C8F5",
            300: "#6F9FE2",
            400: "#4878C5",
            500: "#1948A0",
            600: "#123789",
            700: "#0C2973",
            800: "#071C5C",
            900: "#04134C",
          },
          success: {
            100: "#E0F8CF",
            200: "#BDF1A1",
            300: "#88D66C",
            400: "#55AD42",
            500: "#1F7715",
            600: "#11660F",
            700: "#0A550F",
            800: "#06450F",
            900: "#04390F",
          },
          info: {
            100: "#CBE8FA",
            200: "#98CDF6",
            300: "#62A6E3",
            400: "#3A7EC9",
            500: "#094DA5",
            600: "#063B8D",
            700: "#042C76",
            800: "#021F5F",
            900: "#01154F",
          },
          warning: {
            100: "#FEF4CB",
            200: "#FDE798",
            300: "#FBD564",
            400: "#F7C23D",
            500: "#F2A500",
            600: "#D08700",
            700: "#AE6B00",
            800: "#8C5100",
            900: "#744000",
          },
          danger: {
            100: "#FAE2CE",
            200: "#F6C1A0",
            300: "#E4916C",
            400: "#CA6345",
            500: "#A82B15",
            600: "#90180F",
            700: "#780A0B",
            800: "#61060E",
            900: "#500410",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
