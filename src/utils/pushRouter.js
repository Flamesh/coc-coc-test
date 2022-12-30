export function pushRouterWithoutReload(target) {
  if (history.pushState) {
    var newurl =
      window.location.protocol + "//" + window.location.host + target;
    window.history.pushState({ path: newurl }, "", newurl);
  }
}
