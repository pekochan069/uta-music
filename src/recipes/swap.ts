import { sva } from "styled-system/css";

/**
 * @summary A recipe for creating a swap component.
 * @example all possible variants: `"rotate" | "rotateRight" | "rotateLeft" | "flip"`
 * @example
 * ```
 * const swap = recipe()
 * const rotateSwap = recipe({ visual: "rotate" })
 * <label class={swap.root}>
 *   <input type="checkbox" class={swap.input} />
 *   <span class={swap.on}>On</span>
 *   <span class={swap.off}>Off</span>
 * </label>
 * ```
 */
export const swapRecipe = sva({
  slots: ["root", "input"],
  base: {
    root: {
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
        root: {
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
        root: {
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
        root: {
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
        root: {
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
