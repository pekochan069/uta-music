import { sva } from "styled-system/css";

/**
 * @summary A recipe for creating a button component.
 * @example
 * ```
 * const button = buttonRecipe()
 * <button class={button.root}>Click</button>
 * ```
 */
export const buttonRecipe = sva({
  slots: ["root"],
  base: {
    root: {
      display: "inline-block",
      rounded: "xl",
      cursor: "pointer",
      outline: "none",
      transition: "all",
      transitionDuration: "75ms",
      _active: {
        scale: 0.95,
      },
    },
  },
  variants: {
    color: {
      gray: {
        root: {
          color: "utaGray.950",
          bg: "utaGray.200",
          _hover: {
            bg: "utaGray.300",
          },
        },
      },
      violet: {
        root: {
          color: "white",
          bg: "violet.500",
          _hover: {
            bg: "violet.600",
          },
        },
      },
    },
    visual: {
      base: {},
      ghost: {
        root: {
          bg: "transparent",
          color: "utaGray.950",
          _hover: {
            bg: "utaGray.200",
          },
        },
      },
      outline: {
        root: {
          bg: "transparent",
          border: "1px solid",
          color: "utaGray.950",
          _hover: {
            color: "white",
          },
        },
      },
    },
    size: {
      sm: {
        root: {
          fontSize: "sm",
          px: 3,
          py: 1,
        },
      },
      md: {
        root: {
          fontSize: "md",
          px: 4,
          py: 2,
        },
      },
      lg: {
        root: {
          fontSize: "lg",
          px: 5,
          py: 3,
        },
      },
      xl: {
        root: {
          fontSize: "xl",
          px: 6,
          py: 4,
        },
      },
    },
  },
  compoundVariants: [
    {
      color: "gray",
      visual: "outline",
      css: {
        root: {
          borderColor: "utaGray.600",
          _hover: { bg: "utaGray.600" },
        },
      },
    },
    {
      color: "violet",
      visual: "outline",
      css: {
        root: {
          color: "violet.600",
          borderColor: "violet.600",
          _hover: { bg: "violet.600" },
        },
      },
    },
  ],
  defaultVariants: {
    color: "gray",
    size: "md",
    visual: "base",
  },
});
