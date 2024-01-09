(function () {
  const r = document.createElement('link').relList;
  if (r && r.supports && r.supports('modulepreload')) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) o(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === 'childList')
        for (const s of t.addedNodes)
          s.tagName === 'LINK' && s.rel === 'modulepreload' && o(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(e) {
    const t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === 'use-credentials'
        ? (t.credentials = 'include')
        : e.crossOrigin === 'anonymous'
          ? (t.credentials = 'omit')
          : (t.credentials = 'same-origin'),
      t
    );
  }
  function o(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = n(e);
    fetch(e.href, t);
  }
})();
const i = 'px-6 py-1 text-sm font-medium rounded-sm',
  u = 'bg-gray-100 text-bluegray-800',
  d = ({
    id: c = crypto.randomUUID(),
    value: r,
    onClick: n,
    type: o = 'button',
  }) => {
    const e = document.createElement('button');
    return (
      (e.onclick = n),
      (e.textContent = r),
      e.setAttribute('id', c),
      e.setAttribute('type', o),
      e
    );
  },
  l = ({ id: c = crypto.randomUUID(), value: r, onClick: n }) => {
    const o = d({ id: c, value: r, onClick: n });
    return (o.className = `${i} ${u}`), o;
  },
  a = document.querySelector('#app');
a.insertAdjacentElement(
  'beforeend',
  l({
    id: 'bye-button',
    value: '잘가',
    onClick: () => {
      window.location.href = 'login';
    },
  })
);
