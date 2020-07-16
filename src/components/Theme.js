import { createGlobalStyle } from "styled-components"
import { mix } from "polished"

const white = "#fff"
const black = "rgb(0,0,0)"
const primaryLight = "rgb(28,28,225)"
const primaryDark = "rgb(255, 115, 36)"
const success = "rgb(16,158,98)"
const fail = "rgb(184,0,0)"

const white500 = white
const white600 = mix(0.05, black, white)
const white700 = mix(0.1, black, white)
const white800 = mix(0.2, black, white)
const white900 = mix(0.3, black, white)

const black50 = mix(0.5, white, black)
const black100 = mix(0.4, white, black)
const black200 = mix(0.3, white, black)
const black300 = mix(0.2, white, black)
const black400 = mix(0.1, white, black)
const black500 = black

const primaryLight900 = mix(0.8, black, primaryLight)
const primaryLight800 = mix(0.6, black, primaryLight)
const primaryLight700 = mix(0.4, black, primaryLight)
const primaryLight600 = mix(0.2, black, primaryLight)
const primaryLight500 = primaryLight
const primaryLight400 = mix(0.2, white, primaryLight)
const primaryLight300 = mix(0.4, white, primaryLight)
const primaryLight200 = mix(0.6, white, primaryLight)
const primaryLight100 = mix(0.8, white, primaryLight)

const primaryDark900 = mix(0.8, black, primaryDark)
const primaryDark800 = mix(0.6, black, primaryDark)
const primaryDark700 = mix(0.4, black, primaryDark)
const primaryDark600 = mix(0.2, black, primaryDark)
const primaryDark500 = primaryDark
const primaryDark400 = mix(0.2, white, primaryDark)
const primaryDark300 = mix(0.4, white, primaryDark)
const primaryDark200 = mix(0.6, white, primaryDark)
const primaryDark100 = mix(0.8, white, primaryDark)

const baseColors = {
  white,
  white500,
  white600,
  white700,
  white800,
  white900,
  black,
  black500,
  black400,
  black300,
  black200,
  black100,
  black50,
  boxShadow: "rgba(0,0,0,0.12)",
  boxShadowHover: "rgba(0,0,0,0.24)",
  secondary: "#b2b2b2", // TODO replace
  success900: mix(0.8, black, success),
  success800: mix(0.6, black, success),
  success700: mix(0.4, black, success),
  success600: mix(0.2, black, success),
  success,
  success500: success,
  success400: mix(0.2, white, success),
  success300: mix(0.4, white, success),
  success200: mix(0.6, white, success),
  success100: mix(0.8, white, success),
  fail900: mix(0.8, black, fail),
  fail800: mix(0.6, black, fail),
  fail700: mix(0.4, black, fail),
  fail600: mix(0.2, black, fail),
  fail,
  fail500: fail,
  fail400: mix(0.2, white, fail),
  fail300: mix(0.4, white, fail),
  fail200: mix(0.6, white, fail),
  fail100: mix(0.8, white, fail),
}

// TODO replace random variables w/ baseColor variables
const lightColors = {
  buttonColor: white,
  primary: primaryLight,
  primary900: primaryLight900,
  primary800: primaryLight800,
  primary700: primaryLight700,
  primary600: primaryLight600,
  primary500: primaryLight500,
  primary400: primaryLight400,
  primary300: primaryLight300,
  primary200: primaryLight200,
  primary100: primaryLight100,
  primaryHover: "rgba(28, 28, 225, 0.8)",
  lightBorder: "#ececec",
  searchBorder: "#7f7f7f",
  searchBackground: white,
  searchBackgroundEmpty: "#f2f2f2",
  searchResultText: "#33363d",
  searchResultBackground: "#f1f3f5",
  selectHover: primaryLight100,
  selectActive: primaryLight200,
  dropdownBackground: white,
  dropdownBackgroundHover: "#f2f2f2",
  dropdownBorder: "#e5e5e5",
  markBackground: "rgba(143,187,237,.1)",
  markUnderline: "rgba(143,187,237,.5)",
  modalBackground: "hsla(0, 0%, 69.8%, 0.9)",
  text: "#333",
  text200: "#666",
  text300: "#4c4c4c",
  textSidebar: "#7f7f7f",
  background: white,
  tableBoxShadow:
    "0 14px 66px rgba(0,0,0,.07), 0 10px 17px rgba(0,0,0,.03), 0 4px 7px rgba(0,0,0,.05)",
  tableItemBoxShadow: "rgba(0, 0, 0, 0.1)",
  tableBackgroundHover: "#f2f2f2",
  preBackground: "#f2f2f2",
  preBorder: "rgba(0,0,0,.05)",
  homeDivider: "#a4a4f3",
  displayDark: "none",
  displayLight: "block",
  grayBackground: "#fcfcfc",
  cardGradient:
    "radial-gradient(46.28% 66.31% at 66.95% 58.35%, #e6e6f7 0%, #e7edfa 50%, #e9fbfa 100%)",
}

// TODO replace random variables w/ baseColor variables
const darkColors = {
  buttonColor: black300,
  primary: primaryDark,
  primary900: primaryDark900,
  primary800: primaryDark800,
  primary700: primaryDark700,
  primary600: primaryDark600,
  primary500: primaryDark500,
  primary400: primaryDark400,
  primary300: primaryDark300,
  primary200: primaryDark200,
  primary100: primaryDark100,
  lightBorder: "#404040",
  searchBorder: "#b2b2b2",
  searchBackground: "#4c4c4c",
  searchBackgroundEmpty: "#333",
  searchResultText: "#f1f3f5",
  searchResultBackground: "#33363d",
  selectHover: primaryDark700,
  selectActive: primaryDark600,
  dropdownBackground: "#191919",
  dropdownBackgroundHover: "#000",
  dropdownBorder: "#333",
  markBackground: "rgb(255, 115, 36, .1)",
  markUnderline: "rgb(255, 115, 36, .5)",
  modalBackground: "rgba(25,25,25,0.8)",
  text: "#f2f2f2",
  text200: "#b2b2b2",
  text300: "#ccc",
  textSidebar: "hsla(0,0%,69.8%,.8)",
  background: "rgb(34,34,34)", // "#222222",
  tableBoxShadow:
    "0 14px 66px hsla(0,0%,96.1%,.07), 0 10px 17px hsla(0,0%,96.1%,.03), 0 4px 7px hsla(0,0%,96.1%,.05)",
  tableItemBoxShadow: "hsla(0,0%,100%,.1)",
  tableBackgroundHover: "rgba(255,115,36,.013)",
  preBackground: "#191919",
  preBorder: "hsla(0,0%,100%,.05)",
  homeDivider: "#ffc7a7",
  displayDark: "block",
  displayLight: "none",
  grayBackground: "#272627",
  cardGradient:
    "linear-gradient(49.21deg, rgba(127, 127, 213, 0.2) 19.87%, rgba(134, 168, 231, 0.2) 58.46%, rgba(145, 234, 228, 0.2) 97.05% )",
}

const lightThemeColors = Object.assign({}, baseColors, lightColors)
const darkThemeColors = Object.assign({}, baseColors, darkColors)

const theme = {
  fontSizes: {
    // based on typical browser default font size of 16px
    xs: "0.75rem", // 12px
    s: "0.875rem", // 14px
    m: "1rem", // 16px
    r: "1.125rem", // 18px
    l: "1.5rem", // 20px
    xl: "2rem", // 24px
  },
  breakpoints: {
    xs: "320px",
    s: "414px",
    m: "768px",
    l: "1024px",
    xl: "1440px", // Used as the max-width
  },
}

export const lightTheme = Object.assign({}, theme, { colors: lightThemeColors })
export const darkTheme = Object.assign({}, theme, { colors: darkThemeColors })

// Dynamic global styles
// Unfortunately Prettier doesn't format `createGlobalStyle`
// TODO external link styles no longer working...
// Seemingly nothing that doesn't involve a theme variable?
export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
  }
  a {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;
  }
  mark {
    background: ${(props) => props.theme.colors.markBackground};
    box-shadow: inset 0 -2px 0 0 rgba(69,142,225,.8);
  }

  .anchor.before {
    fill: ${(props) => props.theme.colors.text};
  }

  /* Legacy styles from lists.styl */
  ul {
    font-size: 1rem;
    line-height: 1.6;
    font-weight: 400;
    margin: 2rem 0 1rem;
    padding: 0;
    margin: 1em;
    list-style-type: none;
    list-style-image: none;
  }
  li {
    padding-left: .5em;
    margin-bottom: .5em;
      p:first-of-type {
        margin-top: 0;
      }
      p:last-of-type {
        margin-bottom: 0;
      }
    &:before {
      content: "\2022";
      color: ${(props) => props.theme.colors.primary};
      display: inline-block;
      width: 1em;
      margin-left: -1em;
      position: absolute;
    }
  }
  `

// Mixins
// TODO must be a better way...
export const Mixins = {
  textLevel1: `
    font-size: 3rem;
    line-height: 1.4;
    margin: 2rem 0;
    font-weight: 400;
  `,
  textLevel2: `
    font-size: 2rem;
    line-height: 1.4;
    margin: 4.5rem 0 1.5rem;
    font-weight: 400;
  `,
  textLevel3: `
    font-size: 1.5rem;
    line-height: 1.4;
    margin: 1.5rem 0;
    font-weight: 400;
  `,
  textLevel4: `
    font-size: 1.25rem;
    line-height: 1.4;
    font-weight: 400;
  `,
  textLevel5: `
    font-size: 1rem;
    line-height: 1.6;
    font-weight: 400;
  `,
  textLevel6: `
    font-size: .875rem;
    line-height: 1.6;
    font-weight: 400;
    letter-spacing: 0.04em;
    margin: 1.14em 0;
    text-transform uppercase
  `,
  textLevel7: `
    font-size: 1rem;
    line-height: 1.6;
    font-weight: 400;
    margin: 2rem 0 1rem;
  `,
  textLevel8: `
    font-size: .875rem;
    line-height:1.6;
    margin: 1.14em 0;
    font-weight: 400;
  `,
}
