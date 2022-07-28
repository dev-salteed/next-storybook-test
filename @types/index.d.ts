export {};
declare module '*.svg' {
  const content: any;
  export default content;
}
declare global {
  interface Window {
    state: object;
  }
}
