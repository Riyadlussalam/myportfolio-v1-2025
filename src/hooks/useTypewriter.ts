import { useEffect, useState } from "react";

export function useTypewriter(
  words: string[],
  typingSpeed = 100,
  deletingSpeed = 50,
  pause = 1500
) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: NodeJS.Timeout;

    setIsActive(true);

    if (!isDeleting && text.length < currentWord.length) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length + 1));
      }, typingSpeed);
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length - 1));
      }, deletingSpeed);
    } else if (!isDeleting && text.length === currentWord.length) {
      setIsActive(false);
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return { text, isActive };
}
