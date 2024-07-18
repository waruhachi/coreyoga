import { useEffect } from 'react';
import { getCalApi } from '@calcom/embed-react';
import type { GlobalCal } from '@calcom/embed-core';

export default function YogaForBeginners() {
    useEffect(() => {
        (async function () {
            const cal = (await getCalApi({
                namespace: 'yoga-for-beginners',
            })) as GlobalCal;
            cal.ns['yoga-for-beginners']('ui', {
                styles: { branding: { brandColor: '#000000' } },
                hideEventTypeDetails: false,
                layout: 'column_view',
            });
        })();
    }, []);

    return (
        <button
            className="w-full rounded-lg bg-red-400 px-4 py-2 text-white"
            data-cal-namespace="yoga-for-beginners"
            data-cal-link="coreyoga/yoga-for-beginners"
            data-cal-config='{"layout":"column_view"}'
        >
            Register Now
        </button>
    );
}
