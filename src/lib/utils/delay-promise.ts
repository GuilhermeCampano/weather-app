export async function delayPromise<T>(promise: Promise<T>, delay = 300): Promise<T> {
  const date = Date.now();
  const response = await promise;
  const timePassed = Date.now() - date;
  if (timePassed < delay) {
    await new Promise((resolve) => setTimeout(resolve, delay - timePassed));
  }
  return response;
}