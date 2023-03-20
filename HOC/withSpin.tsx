import React, { ComponentType, useState } from "react";

export interface WithSpinProps {
  spin: number | any;
  onWheel: () => {};
  onTouchStart: () => {};
  onTouchEnd: () => {};
}

const withSpin = () => (OriginalComponent: ComponentType<WithSpinProps>) => (props: any) => {
  const [spin, setSpin] = useState<number>(0);
  const [touchStart, setTouchStart] = useState<number>(0);
  const [scroll, setScroll] = useState<boolean>(true);
  const [articleNum] = useState<number>(4);

  const wheelEvent = (e: WheelEvent) => {
    if (scroll) {
      setScroll(false);
      if (e.deltaY > 0) {
        spin < articleNum - 1 && setSpin((prev) => prev + 1);
      } else {
        spin > 0 && setSpin((prev) => prev - 1);
      }
      setTimeout(() => setScroll(true), 1000);
    }
  };

  const touchEvent = (e: TouchEvent) => {
    switch (e.type) {
      case "touchstart":
        setTouchStart(e.touches[0].clientY);
        break;
      case "touchend":
        const isTrigger = e.changedTouches[0].clientY < touchStart;
        const isGapTrue = touchStart - e.changedTouches[0].clientY > 50;
        const isGapFalse = e.changedTouches[0].clientY - touchStart > 50;

        if (isTrigger && isGapTrue) {
          spin < articleNum - 1 && setSpin((prev) => prev + 1);
        }

        if (isGapFalse) {
          spin > 0 && setSpin((prev) => prev - 1);
        }
    }
  };

  return (
    <OriginalComponent {...props} spin={spin} onWheel={wheelEvent} onTouchStart={touchEvent} onTouchEnd={touchEvent} />
  );
};

export default withSpin;
