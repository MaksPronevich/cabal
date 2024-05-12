import { clsx } from "clsx";
import { forwardRef, ForwardedRef } from "react";
import { ButtonInterface } from "./Button.interface";

export const Button = forwardRef<HTMLButtonElement, ButtonInterface>(
  (props: ButtonInterface, ref: ForwardedRef<HTMLButtonElement>) => {
    const {
      children,
      size = "lg",
      icon,
      iconPosition,
      variant = "primary",
      loading,
      className = "",
      onClick,
      disabled,
      ...restProps
    } = props;

    return (
      <button
        className={clsx(
          "inline-flex items-center justify-center gap-3 whitespace-nowrap uppercase transition-transform hover:scale-[0.95]",
          variant === "primary" && "border-2 border-gray-100 bg-white text-black",
          variant === "ghost" && "border border-gray-100",
          size === "md" && "",
          size === "lg" && "h-[48px] px-12",
          disabled && "pointer-events-none opacity-80",
          className,
        )}
        disabled={loading || disabled}
        onClick={onClick}
        {...restProps}
        ref={ref}
      >
        {icon && iconPosition === "icon-left" && (
          <img src={`/img/icons/${icon}.svg`} height={24} alt={icon} width={24} />
        )}
        {children}
        {icon && iconPosition === "icon-right" && (
          <img src={`/img/icons/${icon}.svg`} height={24} alt={icon} width={24} />
        )}
      </button>
    );
  },
);

Button.displayName = "Button";
