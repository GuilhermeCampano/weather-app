export const AVERAGE_TYPING_SPEED = 300;

export const debounce = <T extends (...args: unknown[]) => unknown>(fn: T, delay: number = AVERAGE_TYPING_SPEED) => {
  let timeoutId: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};
