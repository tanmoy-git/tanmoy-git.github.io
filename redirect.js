// Old GitHub Pages addresses moved to tanmoybh.com when the repos moved to
// the tanmoy-bh organization. Maps every old path to its new home.
(function () {
  var p = location.pathname, rest;
  var to = 'https://tanmoybh.com/';
  if (/^\/resume(\/|$)/.test(p)) {
    rest = p.replace(/^\/resume\/?/, '');
    to = 'https://tanmoybh.com/' + (rest === 'index.html' ? '' : rest);
  } else if (/^\/bobia(\/|$)/.test(p)) {
    to = 'https://projects.tanmoybh.com/bobia/' + p.replace(/^\/bobia\/?/, '');
  }
  location.replace(to + location.search + location.hash);
})();
