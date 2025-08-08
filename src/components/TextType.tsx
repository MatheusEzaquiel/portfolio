import { useState, useEffect } from 'react';

interface TextTypeProps {
  text: string[];
  typingSpeed?: number;
  pauseDuration?: number;
  showCursor?: boolean;
  cursorCharacter?: string;
}

const TextType = ({ text, typingSpeed = 100, pauseDuration = 1500, showCursor = true, cursorCharacter = '|' }: TextTypeProps) => {
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < text[textIndex].length) {
          setCurrentText(prev => prev + text[textIndex][charIndex]);
          setCharIndex(prev => prev + 1);
        } else {
          setIsDeleting(true);
        }
      } else {
        if (charIndex > 0) {
          setCurrentText(prev => prev.slice(0, -1));
          setCharIndex(prev => prev - 1);
        } else {
          setIsDeleting(false);
          setTextIndex(prev => (prev + 1) % text.length);
        }
      }
    }, isDeleting ? typingSpeed / 2 : typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, text, textIndex, typingSpeed]);

  useEffect(() => {
    if (!isDeleting && charIndex === text[textIndex].length) {
      const pause = setTimeout(() => setIsDeleting(true), pauseDuration);
      return () => clearTimeout(pause);
    }
  }, [charIndex, isDeleting, pauseDuration, text, textIndex]);

  return (
    <span>
      {currentText}
      {showCursor && <span>{cursorCharacter}</span>}
    </span>
  );
};

export default TextType;