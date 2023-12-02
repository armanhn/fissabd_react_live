import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollToTop() {
    const location = useLocation();

    useEffect(() => {
        // If the URL has a hash, scroll to the element with that ID.
        if (location.hash) {
            const element = document.getElementById(location.hash.replace('#', ''));
            if (element) {
                element.scrollIntoView();
            }
        } else {
            // If there is no hash, scroll to the top of the page.
            window.scrollTo(0, 0);
        }
    }, [location]); // Depend on the location object so this runs on every route change
}
