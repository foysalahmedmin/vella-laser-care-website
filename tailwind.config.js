/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    darkMode: ["class"],
    container: {
      center: true,
      screens: {
        "2xl": "90rem",
      },
      padding: {
        DEFAULT: "var(--container-space)",
      },
    },
    extend: {
      screens: {
        "2xl": "1440px",
        "3xl": "1536px",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      spacing: {
        container: "var(--container-space)",
      },
      height: {
        header: "var(--header-height)",
        "top-header": "var(--top-header-height)",
        "combined-header":
          "calc(var(--header-height) + var(--top-header-height))",
        "screen-minus-header": "calc(100vh - var(--header-height))",
        "screen-minus-combined-header":
          "calc(100vh - var(--header-height) - var(--top-header-height))",
      },
      minHeight: {
        header: "var(--header-height)",
        "top-header": "var(--top-header-height)",
        "combined-header":
          "calc(var(--header-height) + var(--top-header-height))",
        "screen-minus-header": "calc(100vh - var(--header-height))",
        "screen-minus-combined-header":
          "calc(100vh - var(--header-height) - var(--top-header-height))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - .1em)",
        sm: "calc(var(--radius) - .25em)",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        title: "hsl(var(--title))",
        foreground: "hsl(var(--foreground))",
        background: "hsl(var(--background))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",

          50: "#FDE5E7",
          100: "#F9C4C7",
          200: "#F49FA4",
          300: "#EF7A81",
          400: "#EA5967",
          500: "#DF313B",
          600: "#B52A32",
          700: "#932329",
          800: "#701B20",
          900: "#4E1416",
          950: "#3B0F10",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",

          50: "#FFEFE7",
          100: "#FFDBC6",
          200: "#FFC4A1",
          300: "#FFAC7B",
          400: "#FF9860",
          500: "#FF8247",
          600: "#E7743F",
          700: "#C56536",
          800: "#A4572E",
          900: "#833926",
          950: "#63251E",
        },
        tertiary: {
          DEFAULT: "hsl(var(--tertiary))",
          foreground: "hsl(var(--tertiary-foreground))",

          50: "#E1F5F2",
          100: "#B2EBF2",
          200: "#80DEEA",
          300: "#4DD0E1",
          400: "#26C6DA",
          500: "#44B678",
          600: "#3AAF61",
          700: "#319A54",
          800: "#278648",
          900: "#1E7D3C",
          950: "#165C30",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        dark: {
          DEFAULT: "hsl(var(--dark))",
          foreground: "hsl(var(--dark-foreground))",
        },
        light: {
          DEFAULT: "hsl(var(--light))",
          foreground: "hsl(var(--dark-light))",
        },
      },
      boxShadow: {
        "custom-1": "2px 2px 10px rgba(0, 0, 0, 0.08)",
      },
      keyframes: {
        "loading-spin": {
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        pop: {
          "0%": {
            transform: "scale(.95)",
          },
          "50%": {
            transform: "scale(1.03)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
      animation: {
        "loading-spin":
          "loading-spin 3s cubic-bezier(0.56, -0.24, 0.41, 1.23) infinite",
        pop: "pop 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
