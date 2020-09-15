export default function debounce(delay, callback, ...callbackArgs) {
  let timer;
  return () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      timer = null;
      callback(...callbackArgs);
    }, delay);
  };
}
