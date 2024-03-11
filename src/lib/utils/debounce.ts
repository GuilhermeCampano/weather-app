export const AVERAGE_TYPING_SPEED = 300;

export const debounce = <F extends (...args: unknown[]) => unknown>(func: F, delay: number = AVERAGE_TYPING_SPEED) => {
  let timeoutId: NodeJS.Timeout;

  return (...args: Parameters<F>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};
