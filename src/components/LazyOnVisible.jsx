import { useEffect, useRef, useState } from 'react';

export default function LazyOnVisible({ loader, id }) {
  const placeholderRef = useRef(null);
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    if (Component) return undefined;

    let cancelled = false;
    let loaded = false;

    const load = () => {
      if (loaded || cancelled) return;
      loaded = true;
      loader().then((mod) => {
        if (cancelled) return;
        setComponent(() => mod.default);
        if (id && window.location.hash === `#${id}`) {
          requestAnimationFrame(() => {
            document.getElementById(id)?.scrollIntoView();
          });
        }
      });
    };

    if (id && window.location.hash === `#${id}`) {
      load();
      return () => {
        cancelled = true;
      };
    }

    const node = placeholderRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          load();
          observer.disconnect();
        }
      },
      { rootMargin: '80px 0px' }
    );
    if (node) observer.observe(node);

    const onHashChange = () => {
      if (id && window.location.hash === `#${id}`) {
        load();
        observer.disconnect();
      }
    };
    window.addEventListener('hashchange', onHashChange);

    return () => {
      cancelled = true;
      observer.disconnect();
      window.removeEventListener('hashchange', onHashChange);
    };
  }, [Component, loader, id]);

  if (Component) return <Component />;

  return <div ref={placeholderRef} id={id} />;
}
