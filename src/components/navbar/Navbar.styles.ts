import { sva } from "styled-system/css";

export const recipe = sva({
  slots: [
    "header",
    "nav",
    "logoContainer",
    "logoAnchor",
    "logoImage",
    "logoText",
    "menuButtonContainer",
    "menuButton",
    "settingsButton",
    "settingsIcon",
    "settingsMenu",
  ],
  base: {
    header: {
      zIndex: 50,
      display: "flex",
      flexWrap: "wrap",
      fontSize: "md",
      py: 2,
      px: 4,
      md: {
        flexWrap: "nowrap",
        justifyContent: "start",
      },
    },
    nav: {
      mx: "auto",
      w: "full",
      md: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      },
    },
    logoContainer: {
      display: "grid",
      placeItems: "center",
    },
    logoAnchor: {
      width: "max-content",
      display: "flex",
      gap: 2,
      rounded: "xl",
      p: 1.5,
      outline: "none",
      userSelect: "none",
    },
    logoImage: {
      h: 10,
      w: 10,
    },
    logoText: {
      width: "max-content",
      display: "grid",
      alignItems: "start",
      justifyContent: "center",
      fontSize: "xl",
      fontWeight: "bold",
      lineHeight: "none",
      letterSpacing: "wide",
      "& > span:first-child": {
        color: "violet.500",
        _dark: {
          color: "violet.400",
        },
      },
      "& > span:last-child": {
        color: "utaGray.700",
        _dark: {
          color: "utaGray.300",
        },
      },
    },
    menuButtonContainer: {
      color: "utaGray.900",
      md: { display: "none" },
      _dark: { color: "utaGray.500" },
    },
    menuButton: {
      p: 2,
      rounded: "xl",
      color: "utaGray.900",
      _hover: {
        bg: "utaGray.100",
      },
      _active: {
        bg: "utaGray.200",
      },
      _dark: {
        color: "utaGray.300",
        _hover: {
          bg: "utaGray.700",
        },
        _active: {
          bg: "utaGray.600",
        },
      },
    },
    settingsButton: {
      display: "flex",
      alignItems: "center",
    },
    settingsIcon: {
      marginInlineStart: 1,
      h: 6,
      w: 6,
      flexShrink: 0,
    },
  },
});
