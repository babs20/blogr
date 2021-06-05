import { useEffect } from 'react';

export const useOnOutsideClick = (
  node: React.RefObject<HTMLLIElement>,
  handler: React.Dispatch<React.SetStateAction<boolean>>,
  state: boolean
): void => {
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent): void => {
      if (node.current && node.current.contains(e.target as Node)) return;
      handler(false);
    };

    if (state) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [node, handler, state]);
};
