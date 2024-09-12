"use client";
import { AnimationProps, motion, useInView } from "framer-motion";
import { useRef } from "react";

interface MotionDivProps extends AnimationProps {
  children?: React.ReactNode;
  className?: string;
}

const MotionDiv: React.FC<MotionDivProps> = (props) => {
  const { initial, animate, transition, children, className } = props;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? animate : {}}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
