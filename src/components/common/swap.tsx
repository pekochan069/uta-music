import { type JSX } from "solid-js";

import { recipe } from "./swap.styles";

type SwapProps = {
  checked?: boolean;
  children?: JSX.Element;
  class?: string;
  inputId?: string;
  onChange?: () => void;
};

export const Swap = (props: SwapProps) => {
  const styles = recipe();
  return (
    <label class={`${styles.label} ${props.class ?? ""}`}>
      <input
        type="checkbox"
        checked={props.checked}
        onChange={() => props.onChange && props.onChange()}
        class={styles.input}
        {...(props.inputId && { id: props.inputId })}
      />
      {props.children}
    </label>
  );
};

export const RotateSwap = (props: SwapProps) => {
  const styles = recipe({ visual: "rotate" });

  return (
    <label class={`${styles.label} ${props.class ?? ""}`}>
      <input
        type="checkbox"
        checked={props.checked}
        onChange={() => props.onChange && props.onChange()}
        class={styles.input}
        {...(props.inputId && { id: props.inputId })}
      />
      {props.children}
    </label>
  );
};

export const RotateRightSwap = (props: SwapProps) => {
  const styles = recipe({ visual: "rotateRight" });

  return (
    <label class={`${styles.label} ${props.class ?? ""}`}>
      <input
        type="checkbox"
        checked={props.checked}
        onChange={() => props.onChange && props.onChange()}
        class={styles.input}
        {...(props.inputId && { id: props.inputId })}
      />
      {props.children}
    </label>
  );
};

export const RotateLeftSwap = (props: SwapProps) => {
  const styles = recipe({ visual: "rotateLeft" });

  return (
    <label class={`${styles.label} ${props.class ?? ""}`}>
      <input
        type="checkbox"
        checked={props.checked}
        onChange={() => props.onChange && props.onChange()}
        class={styles.input}
        {...(props.inputId && { id: props.inputId })}
      />
      {props.children}
    </label>
  );
};

export const FlipSwap = (props: SwapProps) => {
  const styles = recipe({ visual: "flip" });

  return (
    <label class={`${styles.label} ${props.class ?? ""}`}>
      <input
        type="checkbox"
        checked={props.checked}
        onChange={() => props.onChange && props.onChange()}
        class={styles.input}
        {...(props.inputId && { id: props.inputId })}
      />
      {props.children}
    </label>
  );
};
