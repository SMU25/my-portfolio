export const scrollTop: VoidFunction = () => {
  const appElement = document.querySelector(".App");

  appElement.scrollTo(0, 0);
};
