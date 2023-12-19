import { sva } from "styled-system/css";

export const recipe = sva({
  slots: ["label", "input"],
  base: {
    label: {
      position: "relative",
      display: "inline-grid",
      placeContent: "center",
      userSelect: "none",
      cursor: "pointer",
      "& > *": {
        transitionProperty: "opacity, transform, rotate, rotateY",
        transitionDuration: "300ms",
        gridColumnStart: 1,
        gridRowStart: 1,
        transitionTimingFunction: "ease-in-out",
      },
      "& .swap-on": {
        opacity: 0,
      },
      "& input:checked ~ .swap-off": {
        opacity: 0,
      },
      "& input:checked ~ .swap-on": {
        opacity: 100,
      },
    },
    input: {
      appearance: "none",
    },
  },
  variants: {
    visual: {
      rotate: {
        label: {
          "& .swap-on": {
            rotate: "45deg",
          },
          "& input:checked ~ .swap-off": {
            rotate: "-45deg",
          },
          "& input:checked ~ .swap-on": {
            rotate: "0deg",
          },
        },
      },
      rotateRight: {
        label: {
          "& .swap-on": {
            rotate: "90deg",
          },
          "& input:checked ~ .swap-off": {
            rotate: "-90deg",
          },
          "& input:checked ~ .swap-on": {
            rotate: "0deg",
          },
        },
      },
      rotateLeft: {
        label: {
          "& .swap-on": {
            rotate: "-90deg",
          },
          "& input:checked ~ .swap-off": {
            rotate: "90deg",
          },
          "& input:checked ~ .swap-on": {
            rotate: "0deg",
          },
        },
      },
      flip: {
        label: {
          transformStyle: "preserve-3d",
          perspective: "16em",
          "& .swap-on": {
            rotateY: "180deg",
            backfaceVisibility: "hidden",
            opacity: 100,
          },
          "& input:checked ~ .swap-off": {
            rotateY: "-180deg",
            backfaceVisibility: "hidden",
            opacity: 100,
          },
          "& input:checked ~ .swap-on": {
            rotateY: "0deg",
          },
        },
      },
    },
  },
});
