import { sva } from "styled-system/css";

/**
 * @summary A recipe for creating a dropdown component.
 * @example
 * ```
 * const dropdown = dropdownRecipe()
 * <div class={cx("group", dropdown.root)}>
 *   <div class={dropdown.button} role="button" tabindex={0}>Click</div>
 *   <ul class={dropdown.content} tabindex={0}>
 *     <li><a>Item 1</a></li>
 *     <li><a>Item 2</a></li>
 *   </ul>
 * </div>
 * ```
 */
export const dropdownRecipe = sva({
  slots: ["root", "button", "content"],
  base: {
    root: {
      display: "inline-block",
      position: "relative",
      "& > *:focus": {
        outline: "none",
      },
    },
    button: {},
    content: {
      position: "absolute",
      opacity: 0,
      visibility: "hidden",
      transformOrigin: "top",
      _groupFocus: {
        visibility: "visible",
        opacity: 100,
        transform: "scale(1)",
      },
      _groupFocusWithin: {
        visibility: "visible",
        opacity: 100,
        transform: "scale(1)",
      },
    },
  },
});
