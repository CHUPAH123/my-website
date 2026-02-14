import { useEffect, useRef, useState } from "react";

export function useFadeInOnScroll() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
            // Only fade in if at least 50% is visible
            setVisible(true);
          }
        });
      },
      {
        threshold: 0.2, // trigger when 50% visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return [ref, visible] as const;
}
