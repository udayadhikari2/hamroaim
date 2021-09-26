module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      border: ["focus"],
      borderRadius:['focus'],
      translate: ["active", "group-hover"],
      display: ["group-hover"],
      animation: ['motion-safe'],
      opacity: ['disabled'],
      width: ["responsive", "hover", "focus"],
      height: ["responsive", "hover", "focus"],
      mixBlendMode: ['hover', 'focus'],
      zIndex:["hover"]
    },
  },
  plugins: [],
};
