module.exports = {
  purge: {
    layers: ['components', 'pages'],
    content: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"]
  },
  theme: {
    extend: {
      colors: {
        "accent-1": "#333",
      },
      backgroundImage: theme =>({
        'grower-x': "url('https://res.cloudinary.com/tpage99/image/upload/v1616678658/dev/grower-x.png')",
        'sweetalicious': "url('https://res.cloudinary.com/tpage99/image/upload/v1613883856/dev/sweetalicious_ss.png')",
        'coffee-first': "url('https://res.cloudinary.com/tpage99/image/upload/v1606834116/dev/coffeefirstss.jpg')",
        'wc-partners': "url('https://res.cloudinary.com/tpage99/image/upload/v1606833848/dev/wcpartners.jpg')"
      })
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
