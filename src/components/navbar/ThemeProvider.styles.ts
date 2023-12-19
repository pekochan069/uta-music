import { sva } from "styled-system/css";

export const recipe = sva({
  slots: ["label", "input", "swap"],
  base: {
    swap: {
      color: "utaGray.700",
      _dark: {
        color: "utaGray.300",
      },
    },
  },
});
