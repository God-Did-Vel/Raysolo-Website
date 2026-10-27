import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#060608", 
        foreground: "#f5f5f5", 
        primary: "#0e0f14", 
        surface: "#0e0f14",
        "surface-light": "#151722",
        accent: {
          DEFAULT: "#d4af37",
          light: "#f5e29f",
          dark: "#b8972e",
        },
        gold: {
          100: "#fdf8e6",
          200: "#faefc2",
          300: "#f5e29f",
          400: "#e5c378",
          500: "#d4af37",
          600: "#b8972e",
          700: "#8c701c",
          800: "#614c11",
          900: "#362908",
        },
        obsidian: {
          800: "#1a1b24",
          850: "#13141c",
          900: "#0e0f14",
          950: "#060608",
        }
      },
      borderRadius: {
        '15': '15px',
        'luxury': '15px',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        cinzel: ['"Cinzel"', '"Cormorant Garamond"', 'serif'],
        mono: ['monospace'],
        playfair: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gold-shimmer": "linear-gradient(135deg, #fff2c4 0%, #d4af37 50%, #aa8522 100%)",
        "dark-luxury": "linear-gradient(180deg, #0e0f14 0%, #060608 100%)",
      },
      boxShadow: {
        'gold-glow': '0 0 30px rgba(212, 175, 55, 0.2)',
        'luxury-card': '0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 1px 1px rgba(255, 255, 255, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.02)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;