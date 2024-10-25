const textBlur = {
  initial: {
    filter: "blur(4px)",
    opacity: 0.6,
  },
  show: {
    filter: "blur(0px)",
    opacity: 1,
    transition: { duration: 0.4 },
  },
  hide: {
    filter: "blur(4px)",
    opacity: 0.6,
    transition: { duration: 0.4 },
  },
};

const imageVariants = {
  initial: {
    opacity: 0,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  hide: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

export { textBlur, imageVariants };
