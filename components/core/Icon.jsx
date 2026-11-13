import React from 'react';

// Tabler Icons (outline, MIT) — copied from @tabler/icons v3. Source SVGs live in assets/icons/.
const ICONS = {
  "dental": "<path d=\"M12 5.5c-1.074 -.586 -2.583 -1.5 -4 -1.5c-2.1 0 -4 1.247 -4 5c0 4.899 1.056 8.41 2.671 10.537c.573 .756 1.97 .521 2.567 -.236c.398 -.505 .819 -1.439 1.262 -2.801c.292 -.771 .892 -1.504 1.5 -1.5c.602 0 1.21 .737 1.5 1.5c.443 1.362 .864 2.295 1.262 2.8c.597 .759 2 .993 2.567 .237c1.615 -2.127 2.671 -5.637 2.671 -10.537c0 -3.74 -1.908 -5 -4 -5c-1.423 0 -2.92 .911 -4 1.5\" /> <path d=\"M12 5.5l3 1.5\" />",
  "phone": "<path d=\"M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2\" />",
  "phone-call": "<path d=\"M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2\" /> <path d=\"M15 7a2 2 0 0 1 2 2\" /> <path d=\"M15 3a6 6 0 0 1 6 6\" />",
  "mail": "<path d=\"M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10\" /> <path d=\"M3 7l9 6l9 -6\" />",
  "map-pin": "<path d=\"M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0\" /> <path d=\"M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0\" />",
  "clock": "<path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0\" /> <path d=\"M12 7v5l3 3\" />",
  "calendar": "<path d=\"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12\" /> <path d=\"M16 3v4\" /> <path d=\"M8 3v4\" /> <path d=\"M4 11h16\" />",
  "calendar-event": "<path d=\"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12\" /> <path d=\"M16 3l0 4\" /> <path d=\"M8 3l0 4\" /> <path d=\"M4 11l16 0\" /> <path d=\"M8 15h2v2h-2l0 -2\" />",
  "calendar-check": "<path d=\"M11.5 21h-5.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6\" /> <path d=\"M16 3v4\" /> <path d=\"M8 3v4\" /> <path d=\"M4 11h16\" /> <path d=\"M15 19l2 2l4 -4\" />",
  "user": "<path d=\"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0\" /> <path d=\"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2\" />",
  "check": "<path d=\"M5 12l5 5l10 -10\" />",
  "circle-check": "<path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0\" /> <path d=\"M9 12l2 2l4 -4\" />",
  "shield-check": "<path d=\"M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06\" /> <path d=\"M15 19l2 2l4 -4\" />",
  "arrow-right": "<path d=\"M5 12l14 0\" /> <path d=\"M13 18l6 -6\" /> <path d=\"M13 6l6 6\" />",
  "arrow-up-right": "<path d=\"M17 7l-10 10\" /> <path d=\"M8 7l9 0l0 9\" />",
  "chevron-down": "<path d=\"M6 9l6 6l6 -6\" />",
  "chevron-right": "<path d=\"M9 6l6 6l-6 6\" />",
  "chevron-left": "<path d=\"M15 6l-6 6l6 6\" />",
  "menu-2": "<path d=\"M4 6l16 0\" /> <path d=\"M4 12l16 0\" /> <path d=\"M4 18l16 0\" />",
  "x": "<path d=\"M18 6l-12 12\" /> <path d=\"M6 6l12 12\" />",
  "player-play": "<path d=\"M7 4v16l13 -8l-13 -8\" />",
  "star": "<path d=\"M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873l-6.158 -3.245\" />",
  "sparkles": "<path d=\"M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6\" />",
  "stethoscope": "<path d=\"M6 4h-1a2 2 0 0 0 -2 2v3.5a5.5 5.5 0 0 0 11 0v-3.5a2 2 0 0 0 -2 -2h-1\" /> <path d=\"M8 15a6 6 0 1 0 12 0v-3\" /> <path d=\"M11 3v2\" /> <path d=\"M6 3v2\" /> <path d=\"M18 10a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" />",
  "heart": "<path d=\"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572\" />",
  "heart-handshake": "<path d=\"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572\" /> <path d=\"M12 6l-3.293 3.293a1 1 0 0 0 0 1.414l.543 .543c.69 .69 1.81 .69 2.5 0l1 -1a3.182 3.182 0 0 1 4.5 0l2.25 2.25\" /> <path d=\"M12.5 15.5l2 2\" /> <path d=\"M15 13l2 2\" />",
  "award": "<path d=\"M6 9a6 6 0 1 0 12 0a6 6 0 1 0 -12 0\" /> <path d=\"M12 15l3.4 5.89l1.598 -3.233l3.598 .232l-3.4 -5.889\" /> <path d=\"M6.802 12l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889\" />",
  "certificate": "<path d=\"M12 15a3 3 0 1 0 6 0a3 3 0 1 0 -6 0\" /> <path d=\"M13 17.5v4.5l2 -1.5l2 1.5v-4.5\" /> <path d=\"M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73\" /> <path d=\"M6 9l12 0\" /> <path d=\"M6 12l3 0\" /> <path d=\"M6 15l2 0\" />",
  "alert-circle": "<path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0\" /> <path d=\"M12 8v4\" /> <path d=\"M12 16h.01\" />",
  "alert-triangle": "<path d=\"M12 9v4\" /> <path d=\"M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0\" /> <path d=\"M12 16h.01\" />",
  "info-circle": "<path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0\" /> <path d=\"M12 9h.01\" /> <path d=\"M11 12h1v4h1\" />",
  "circle-x": "<path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0\" /> <path d=\"M10 10l4 4m0 -4l-4 4\" />",
  "photo": "<path d=\"M15 8h.01\" /> <path d=\"M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12\" /> <path d=\"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5\" /> <path d=\"M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3\" />",
  "mood-smile": "<path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0\" /> <path d=\"M9 10l.01 0\" /> <path d=\"M15 10l.01 0\" /> <path d=\"M9.5 15a3.5 3.5 0 0 0 5 0\" />",
  "first-aid-kit": "<path d=\"M8 8v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2\" /> <path d=\"M4 10a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -8\" /> <path d=\"M10 14h4\" /> <path d=\"M12 12v4\" />",
  "quote": "<path d=\"M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5\" /> <path d=\"M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5\" />",
  "brand-facebook": "<path d=\"M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3\" />",
  "brand-x": "<path d=\"M4 4l11.733 16h4.267l-11.733 -16l-4.267 0\" /> <path d=\"M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772\" />",
  "brand-instagram": "<path d=\"M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4l0 -10\" /> <path d=\"M8.5 12a3.5 3.5 0 1 0 7 0a3.5 3.5 0 0 0 -7 0\" /> <path d=\"M17 7v.01\" />",
  "brand-youtube": "<path d=\"M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8\" /> <path d=\"M10 9l5 3l-5 3l0 -6\" />",
  "brand-whatsapp": "<path d=\"M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9\" /> <path d=\"M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1\" />",
  "brand-pinterest": "<path d=\"M8 20l4 -9\" /> <path d=\"M10.7 14c.437 1.263 1.43 2 2.55 2c2.071 0 3.75 -1.554 3.75 -4a5 5 0 1 0 -9.7 1.7\" /> <path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0\" />",
  "player-pause": "<path d=\"M6 6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -12\" /> <path d=\"M14 6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -12\" />"
};

export function Icon({ name, size = 20, strokeWidth = 1.75, label, className, style, ...rest }) {
  const markup = ICONS[name];
  if (!markup) return null;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={['icon', className].filter(Boolean).join(' ')}
      style={style}
      role={label ? 'img' : undefined}
      aria-label={label || undefined}
      aria-hidden={label ? undefined : true}
      focusable="false"
      dangerouslySetInnerHTML={{ __html: markup }}
      {...rest}
    />
  );
}
