"use client"
import React , { useState , useEffect} from 'react'

const texts = [
  "Elevate Your Exam Experience, Anytime, Anywhere!",
  "Unlock Your Potential, Ace Your Exams!",
  "Unleash Your Exam Superpowers, Unleash Success!",
  "Empower Your Mind, Harness Your Potential: Online Exam Mastery!",
  "Rise Above the Ordinary: Conquer Exams the Online Way!",
  "Embrace the Digital Advantage: Exams Just Got Cooler!",
  "let's go",
];

const useTypingEffect = (text, duration, isTypeByLetter = false) => {
    const [currentPosition, setCurrentPosition] = useState(0);
    const items = isTypeByLetter ? text.split("") : text.split(" ");
  
    useEffect(() => {
      setCurrentPosition(0);
    }, [text]);
  
    useEffect(() => {
      if (currentPosition >= items.length) return;
  
      const intervalId = setInterval(() => {
        setCurrentPosition((prevPosition) => prevPosition + 1);
      }, duration);
  
      return () => {
        clearInterval(intervalId);
      };
    }, [currentPosition, items, duration]);
  
    return items.slice(0, currentPosition).join(isTypeByLetter ? "" : " ");
  };

const TIME_TO_FADE = 300;
const TIME_INTERVAL = 3000;
const TIME_PER_LETTER = 100;

export const TextTypingEffectWithTexts = () => {
  const [textIndex, setTextIndex] = React.useState(0);
  const [fadeText, setFadeText] = React.useState(true);
  const [fadeCircle, setFadeCircle] = React.useState(true);
  const textToShow = useTypingEffect(texts[textIndex], TIME_PER_LETTER, false);

  const timeToTypeText = texts[textIndex].split(" ").length * TIME_PER_LETTER;

  useEffect(() => {
    const circleTimeout = setTimeout(() => {
      setFadeCircle(false);
    }, timeToTypeText + 1000);

    const textTimeout = setTimeout(() => {
      setFadeText(false);

      setTimeout(() => {
        setTextIndex((prevIndex) =>
          prevIndex >= texts.length - 1 ? 0 : prevIndex + 1
        );
        setFadeCircle(true);
        setFadeText(true);
      }, TIME_TO_FADE);
    }, TIME_INTERVAL);

    return () => {
      clearTimeout(circleTimeout);
      clearTimeout(textTimeout);
    };
  }, [textIndex]);

  return (
    <>
      <span
        className={`inline-flex items-center text-black duration-300 dark:text-white md:text-2xl text-3xl font-serif mb-2 ${
          fadeText ? "opacity-1 translate-y-0" : "translate-y-2 opacity-0"
        }`}
        key={textIndex}
      >
        {textToShow}{" "}
        <div
          className={`ml-2 h-3 w-3 rounded-full bg-black duration-300 dark:bg-white ${
            fadeCircle ? "" : "h-0 w-0 opacity-0"
          }`}
        />
      </span>
    </>
  );
};

export default TextTypingEffectWithTexts