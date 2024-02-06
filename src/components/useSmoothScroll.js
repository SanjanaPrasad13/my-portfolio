import { useEffect } from 'react';

const useSmoothScroll = (ref) => {
  useEffect(() => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth',
      });
    }
  }, [ref]);
};

export default useSmoothScroll;
