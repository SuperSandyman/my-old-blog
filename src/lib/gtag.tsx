"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export const GA_TRACKING_ID =
    process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID
        ? process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID
        : undefined;

const pageview = (url: string) => {
    if (!GA_TRACKING_ID) return;
    window.gtag("config", GA_TRACKING_ID, {
        page_path: url,
    });
};

// type GTagEvent = {
//     action: string;
//     category: string;
//     label: string;
//     value: number;
// };

export const useGoogleAnalytics = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (process.env.NODE_ENV !== "production") return;

        const path = pathname ?? "";
        const qs = searchParams?.toString();

        const url = qs ? `${path}?${qs}` : path;

        pageview(url);
    }, [pathname, searchParams]);
};

export const GoogleAnalyticsScript: React.FC = () => {
    useGoogleAnalytics();

    if (!GA_TRACKING_ID) return null;

    return null;
};
