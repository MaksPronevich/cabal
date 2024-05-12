import { SyntheticEvent } from "react";

const smoothNavScroll = (event: SyntheticEvent): void => {
  event.preventDefault();
  const target = event.target as HTMLAnchorElement;
  const id = target.getAttribute("href")?.replace("#", "");
  const elem = document.getElementById(String(id));
  elem?.scrollIntoView({
    behavior: "smooth",
  });
};

export const Scroll = {
  smoothNavScroll,
};
