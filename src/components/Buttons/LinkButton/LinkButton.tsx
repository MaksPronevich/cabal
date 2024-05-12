import { clsx } from "clsx";
import { FC, forwardRef } from "react";
import { LinkButtonInterface } from "./LinkButton.interface";

export const LinkButton: FC<LinkButtonInterface> = forwardRef<HTMLAnchorElement, LinkButtonInterface>((props, ref) => {
  const {
    children,
    openInNewTab,
    href,
    icon,
    disabled,
    size = "lg",
    variant = "primary",
    iconPosition,
    className,
    ...restProps
  } = props;

  return (
    <a
      className={clsx(
        "inline-flex items-center justify-center gap-3 whitespace-nowrap uppercase transition-transform hover:scale-[0.95]",
        variant === "primary" && "border-2 border-gray-100 bg-white text-black",
        variant === "ghost" && "border border-gray-100",
        size === "md" && "",
        size === "lg" && "h-[48px] px-12",
        disabled && "pointer-events-none cursor-not-allowed opacity-80",
        className,
      )}
      target={openInNewTab ? "_blank" : "_self"}
      rel="noreferrer"
      {...restProps}
      href={href}
      ref={ref}
    >
      {icon && iconPosition === "icon-left" && <img src={`/img/icons/${icon}.svg`} height={24} alt={icon} width={24} />}
      <span>{children}</span>
      {icon && iconPosition === "icon-right" && (
        <img src={`/img/icons/${icon}.svg`} height={24} alt={icon} width={24} />
      )}
    </a>
  );
});

LinkButton.displayName = "LinkButton";
