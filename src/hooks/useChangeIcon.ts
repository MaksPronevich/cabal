import { useState, useEffect } from "react";

type UseChangeIcon = {
  iconIndex: number;
};

export const useChangeIcon = (totalIcons: number, intervalTime: number): UseChangeIcon => {
  const [iconIndex, setIconIndex] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIconIndex((prevIndex) => {
        const nextIndex = (prevIndex % totalIcons) + 1;
        return nextIndex === 1 ? 1 : nextIndex;
      });
    }, intervalTime);

    return (): void => clearInterval(intervalId);
  }, [totalIcons, intervalTime]);

  return { iconIndex };
};
