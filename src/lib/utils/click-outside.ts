export default function clickOutside(node: HTMLElement, onEventFunction: () => void) {
  const handleClick = (event: MouseEvent) => {
    const path = event.composedPath();

    if (!path.includes(node)) {
      onEventFunction();
    }
  }

  document.addEventListener("click", handleClick);

  return {
    destroy() {
      document.removeEventListener("click", handleClick);
    }
  }
}