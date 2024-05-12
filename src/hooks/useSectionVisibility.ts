import { Ref, useRef, useState, useEffect } from "react";

type UseSectionVisibility = {
  ref: Ref<HTMLDivElement>;
  visibilityPercentage: number;
};

export const useSectionVisibility = (): UseSectionVisibility => {
  const ref = useRef<HTMLDivElement>(null);
  const [visibilityPercentage, setVisibilityPercentage] = useState(0);

  useEffect(() => {
    const thresholds = Array.from({ length: 100 }, (_, i) => i / 100);
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const visiblePercentage = entry.intersectionRatio * 100;
        setVisibilityPercentage(visiblePercentage);
      },
      { threshold: thresholds },
    );

    const element = ref.current;
    if (element) {
      observer.observe(element);
    }

    return (): void => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return { ref, visibilityPercentage };
};
