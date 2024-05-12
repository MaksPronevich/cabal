import React, { FC, useState, useEffect } from "react";

type ShuffleTextProps = {
  text: string;
  className?: string;
};

export const ShuffleText: FC<ShuffleTextProps> = ({ text, className = "" }) => {
  const [shuffledText, setShuffledText] = useState<string>(text);
  const iterations = 10;
  const velocity = 50;

  const shuffle = (o: string[]) => {
    for (let i = o.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [o[i], o[j]] = [o[j], o[i]];
    }
    return o;
  };

  const shuffleText = (originalText: string): void => {
    const elementTextArray = [...originalText];
    let randomText = "";

    const repeatShuffle = (index: number): void => {
      if (index === iterations) {
        setShuffledText(originalText);
        return;
      }

      setTimeout(() => {
        randomText = shuffle(elementTextArray).join("");
        setShuffledText(randomText);
        repeatShuffle(index + 1);
      }, velocity);
    };

    repeatShuffle(0);
  };

  useEffect(() => {
    shuffleText(text);
  }, [text]);

  const handleMouseEnter = () => {
    shuffleText(text);
  };

  return (
    <span onMouseEnter={handleMouseEnter} className={className}>
      {shuffledText}
    </span>
  );
};
