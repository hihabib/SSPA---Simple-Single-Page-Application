/**
 * Initialize Single Page Application
 * @param {function} header callbackfn to insert header content
 * @param {function} main callbackfn to insert main content of the page. this function will be called on each time when path changes
 * @param {function} footer callbackfn to insert footer content
 * @param {string} root Root element id of HTML page.
 * @returns {function} router
 */
const SPAInit = (header, main, footer, root = "root") => {
  /**
   * route to a specific path
   * @param {string} route
   */
  const router = (route) => {
    const { origin } = window.location;
    history.pushState({}, "", origin + route);
    handleLocaiton();
  };

  const handleLocaiton = () => {
    main(location, history);
  };

  document.addEventListener("DOMContentLoaded", () => {
    header(location, history);
    window.onpopstate = handleLocaiton;
    handleLocaiton();
    window.root = document.getElementById(root);
    footer(location, history);
  });
  return router;
};
export default SPAInit;
