import { type JSX } from "solid-js";

type LinkProps = {
  active?: boolean;
  children: JSX.Element;
  class?: string;
  href: string;
};

export default (props: LinkProps) => {
  return (
    <a
      class={`underline-offset-2 transition-colors duration-75 hover:underline dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-slate-600 ${
        props.class ? props.class : ""
      } ${
        props.active
          ? "font-semibold text-violet-600 outline-2 hover:text-violet-700 dark:text-violet-500 dark:focus:text-violet-400"
          : "font-medium text-violet-500 hover:text-violet-600 dark:text-violet-500 dark:focus:text-violet-400"
      }`}
      href={props.href}
    >
      {props.children}
    </a>
  );
};
