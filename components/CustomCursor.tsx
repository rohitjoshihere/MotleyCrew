import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;

    if (!outer || !inner) return;

    // Hide default cursor
    document.documentElement.style.cursor = "none";

    let x = 0, y = 0;
    let targetX = 0, targetY = 0;

    const move = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      inner.style.transform = `translate(${targetX}px, ${targetY}px)`;
    };

    const follow = () => {
      x += (targetX - x) * 0.15;
      y += (targetY - y) * 0.15;
      outer.style.transform = `translate(${x}px, ${y}px)`;
      requestAnimationFrame(follow);
    };

    follow();
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="pointer_wrap">
      <div
        ref={outerRef}
        className="outer_cursor"
      />
      <div
        ref={innerRef}
        className="inner_cursor"
      />
    </div>
  );
}

export default CustomCursor;

