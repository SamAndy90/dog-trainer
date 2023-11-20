import Spinner from "./Spinner";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export type ButtonBaseProps = {
  children: React.ReactNode;
  className?: {
    button?: string;
    loadingIcon?: string;
  };
  loading?: boolean;
  disabled?: boolean;
  href?: string;
  component?: React.ElementType;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">;

export const ButtonBase = forwardRef<HTMLButtonElement, ButtonBaseProps>(
  (props, ref) => {
    const {
      children,
      type = "button",
      href = "#",
      onClick,
      loading = false,
      disabled = false,
      className = {},
      component: Component = "button",
      ...restProps
    } = props;

    const {
      button: buttonClassName = "",
      loadingIcon: loadingIconClassName = "",
    } = className;

    return (
      <Component
        ref={ref}
        type={Component === "button" ? type : undefined}
        href={Component === "a" ? href : undefined}
        onClick={onClick}
        disabled={loading || disabled}
        className={twMerge(buttonClassName)}
        {...restProps}>
        {loading ? (
          <Spinner
            className={twMerge(
              "h-6 w-6 animate-spin text-mainYellow-500",
              loadingIconClassName,
            )}
          />
        ) : (
          children
        )}
      </Component>
    );
  },
);

ButtonBase.displayName = "ButtonBase";
