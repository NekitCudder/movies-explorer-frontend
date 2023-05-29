import { useEffect, useState } from "react";

export function useResize() {
  const [isMobile, seIsMobile] = useState(window.innerWidth < 769);
  useEffect(() => {
    function changeWidth() {
      if (window.innerWidth < 768) {
        seIsMobile(true);
      }
      else {
        seIsMobile(false)
      }
    }
    window.addEventListener('resize', changeWidth);
    return () => window.removeEventListener('resize', changeWidth)
  }, []);

  return isMobile;
}