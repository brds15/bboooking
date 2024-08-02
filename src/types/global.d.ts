export {}

declare global {
  // generic definition of window
  // eslint-disable-next-line
  interface Window {
    stores: Record<string, any>;
  }
}
