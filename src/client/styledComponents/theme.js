// Theme
const theme = {
  baseRadius: "3px",
  colors: {
    // Brand Colors
    brandPrimary: "rgba(227, 173, 48, 1.00)", // #e3ad30
    brandSecondary: "rgba(197, 71, 127, 1.00)", // #c5477f
    lightShade: "rgba(255, 250, 240, 1.00)", //#fffaf0

    // Shades of Grey
    lightGrey: "rgba(208, 208, 208, 1.00)", // #C8C8C8
    mediumGrey: "rgba(102, 102, 102, 1.00)", // #666666
    darkGrey: "rgba(34, 34, 34, 1.00)", // #222222

    // Other Colors
    notificationYellow: "rgba(255, 241, 118, 1.00)", // #FFF176
    notificationRed: "rgba(246, 215, 216, 1.00)", // #F6D7D8
    black: "rgba(0, 0, 0, 1)", // #000000
    white: "rgba(255, 255, 255, 1)", //#FFFFFF
    siteMessage: "rgba(239, 237, 190, 1.00)",

    opacity: "rgba(0, 0, 0, 0.8)",
    whiteBg: "rgba(208,208,208,.3)"
  },

  // Font Weight
  fontWeight: {
    normal: "300", // ProximaNova Regular
    semiBold: "600", // ProximaNova SemiBold
    bold: "bold" // ProximaNova Bold
  },

  //Font Sizes [Font size is calculated based on Base Font Size(14px)]
  fontSize: {
    xxs: "0.8rem", //8px
    xs: "1rem", // 10px
    sm: "1.2rem", // 12px
    md: "1.4rem", // 14px
    lg: "1.6rem", // 16px
    xl: "1.8rem", // 20px
    xxl: "2.4rem" // 24px
  },

  textTransform: {
    upper: "uppercase",
    lower: "lowercase",
    capital: "capitalize",
    none: "none"
  },

  textDecoration: {
    none: "none"
  },

  //Alignment
  textAlign: {
    left: "left",
    right: "right",
    center: "center"
  },

  //Line Height
  lineHeight: {
    base: "1.42857px"
  }
};

export default theme;
