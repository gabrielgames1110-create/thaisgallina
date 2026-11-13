/* Compiles the design-system components in the browser (React + Babel standalone load first).
   Exposes them as window.ClinicaDental and the promise window.ClinicaDentalReady. */
(function () {
  var root = new URL('..', document.currentScript.src);
  var SOURCES = [
    'components/core/Icon.jsx',
    'components/actions/Button.jsx',
    'components/actions/IconButton.jsx',
    'components/forms/TextField.jsx',
    'components/booking/AppointmentForm.jsx',
    'components/navigation/TopBar.jsx',
    'components/navigation/SiteHeader.jsx',
    'components/content/SectionHeading.jsx',
    'components/content/Badge.jsx',
    'components/content/CheckList.jsx',
    'components/content/ServiceStrip.jsx',
    'components/cards/ServiceCard.jsx',
    'components/cards/InfoCard.jsx',
    'components/cards/TestimonialCard.jsx',
    'components/feedback/Modal.jsx'
  ];

  function compileSources() {
    return Promise.all(SOURCES.map(function (p) {
      return fetch(new URL(p, root)).then(function (r) { return r.text(); });
    })).then(function (texts) {
      var ns = {};
      texts.forEach(function (src, i) {
        var name = SOURCES[i].split('/').pop().replace('.jsx', '');
        var body = src.replace(/^import[^;]+;[ \t]*$/gm, '').replace(/export function /g, 'function ');
        var code = window.Babel.transform(body, { presets: ['react'] }).code;
        var factory = new Function('React', 'useState', 'useEffect', 'useId', 'useRef', 'Icon', 'Button', 'IconButton',
          code + '\nreturn ' + name + ';');
        ns[name] = factory(React, React.useState, React.useEffect, React.useId, React.useRef, ns.Icon, ns.Button, ns.IconButton);
      });
      return ns;
    });
  }

  window.ClinicaDentalReady = compileSources().then(function (ns) {
    window.ClinicaDental = ns;
    return ns;
  });
})();
