import { BaseButtonInterface, ButtonIconInterface } from "../Button/Button.interface";

export interface LinkButtonInterface extends BaseButtonInterface, ButtonIconInterface {
  openInNewTab?: boolean;
  className?: string;
  href: string;
}
