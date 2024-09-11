"use client";
import { AnimationProps, motion } from "framer-motion";

interface MotionDivProps extends AnimationProps {
  children: React.ReactNode;
  className?: string;
}

const MotionDiv: React.FC<MotionDivProps> = (props) => {
  const { initial, animate, transition, children, className } = props;
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
