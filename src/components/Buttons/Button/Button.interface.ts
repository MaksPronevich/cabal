import { ReactNode, ForwardedRef, MouseEventHandler } from "react";

export interface BaseButtonInterface {
  variant?: "primary" | "ghost";
  children: ReactNode;
  size?: "md" | "lg";
  disabled?: boolean;
  className?: string;
}

export interface ButtonIconInterface {
  iconPosition?: "icon-right" | "icon-left";
  icon?: string;
}

export interface ButtonInterface extends BaseButtonInterface, ButtonIconInterface {
  type?: "button" | "reset" | "submit" | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  ref?: ForwardedRef<HTMLButtonElement>;
  loading?: boolean;
  active?: boolean;
}
