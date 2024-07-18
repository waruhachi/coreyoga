import { useEffect } from 'react';
import { getCalApi } from '@calcom/embed-react';
import type { GlobalCal } from '@calcom/embed-core';

export default function MeditationForBeginners() {
    useEffect(() => {
        (async function () {
            const cal = (await getCalApi({
                namespace: 'meditation-for-beginners',
            })) as GlobalCal;
            cal.ns['meditation-for-beginners']('ui', {
                styles: { branding: { brandColor: '#000000' } },
                hideEventTypeDetails: false,
                layout: 'column_view',
            });
        })();
    }, []);

    return (
        <button
            className="w-full rounded-lg bg-red-400 px-4 py-2 text-white"
            data-cal-namespace="meditation-for-beginners"
            data-cal-link="coreyoga/meditation-for-beginners"
            data-cal-config='{"layout":"column_view"}'
        >
            Register Now
        </button>
    );
}
