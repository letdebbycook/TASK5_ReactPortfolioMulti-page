import { useLocation } from 'react-router-dom';

export function useActiveLink() {
  const { pathname } = useLocation();

  const isActive = (path) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  return { pathname, isActive };
}
