import { useEffect } from 'react';
import { SITE_CONFIG } from '../lib/constants';

export function useDocumentTitle(title) {
  useEffect(() => {
    const defaultTitle = `${SITE_CONFIG.name} — ${SITE_CONFIG.role}`;
    document.title = title ? `${title} | ${SITE_CONFIG.name}` : defaultTitle;
  }, [title]);
}
