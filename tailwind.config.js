/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": "black",
            "--tw-prose-headings": "black",
            "--tw-prose-links": "black",
            "--tw-prose-links-hover": "black",
            color: "var(--tw-prose-body)",
            p: {
              fontSize: theme("fontSize.xl")[0],
            },
            "h1, h2, h3, h4, h5, h6": {
              color: "var(--tw-prose-headings)",
              fontWeight: theme("fontWeight.bold"),
              marginBottom: theme("spacing.4"),
            },
            h1: {
              fontSize: theme("fontSize.4xl")[0],
            },
            h2: {
              fontSize: theme("fontSize.3xl")[0],
              marginTop: theme("spacing.2"),
            },
            h3: {
              fontSize: theme("fontSize.2xl")[0],
              marginTop: theme("spacing.2"),
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
