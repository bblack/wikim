var m = window.location.host.match(/^([^.]+)\.wikipedia\.org$/);
if (m) {
  window.location.host = m[1] + '.m.wikipedia.org';
}
