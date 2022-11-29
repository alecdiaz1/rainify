import { RefObject, useEffect } from 'react';

/**
 * Hook that alerts clicks outside the passed ref
 * https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
 */

type useClickOutsideProps = {
  ref: RefObject<any>;
  onClickOutside: () => any;
};

export const useClickOutside = ({
  ref,
  onClickOutside,
}: useClickOutsideProps) => {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, onClickOutside]);
};
