export async function withMinimumDelay<T>(promise: Promise<T>, delay = 300) {
  return await Promise.all([promise, new Promise((resolve) => setTimeout(resolve, delay))]).then(([result]) => result);
}