import { useEffect } from 'react';
import { getCalApi } from '@calcom/embed-react';
import type { GlobalCal } from '@calcom/embed-core';

export default function FastWeightLoss() {
    useEffect(() => {
        (async function () {
            const cal = (await getCalApi({
                namespace: 'fast-weight-loss-yoga',
            })) as GlobalCal;
            cal.ns['fast-weight-loss-yoga']('ui', {
                styles: { branding: { brandColor: '#000000' } },
                hideEventTypeDetails: false,
                layout: 'column_view',
            });
        })();
    }, []);

    return (
        <button
            className="w-full rounded-lg bg-red-400 px-4 py-2 text-white"
            data-cal-namespace="fast-weight-loss-yoga"
            data-cal-link="coreyoga/fast-weight-loss-yoga"
            data-cal-config='{"layout":"column_view"}'
        >
            Register Now
        </button>
    );
}
