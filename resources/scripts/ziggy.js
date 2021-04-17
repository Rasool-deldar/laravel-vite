const Ziggy = {
  url: 'https://prescription.me', port: null, defaults: {}, routes: [],
};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
  // eslint-disable-next-line no-restricted-syntax,guard-for-in
  for (const name in window.Ziggy.routes) {
    Ziggy.routes[name] = window.Ziggy.routes[name];
  }
}

export { Ziggy };
