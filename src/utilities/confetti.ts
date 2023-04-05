import confetti from "canvas-confetti";

export const showConfetti = (): void => {
  confetti({
    particleCount: 100,
    spread: 200,
    angle: -100,
    origin: {
      x: 1,
      y: 0,
    },
  });
};
