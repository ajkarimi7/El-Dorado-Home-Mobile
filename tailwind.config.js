module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        brandon: '"Brandon Grotesque", sans-serif',
        minion: '"Minion Pro", sans-serif',
      },
      backgroundImage: {
        drado: 'url("../img/dorado-bg.png")',
        jao: "url(../img/footer-bg.png)",
      },

      // [COLORS]
      colors: {
        primary: "#a2282b",
        "primary-dark": "#7b181b",
        "accent-yellow": "#fdb851",
      },
    },
  },
  plugins: [],
}
