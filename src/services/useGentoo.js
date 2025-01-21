import GentooService from "@/components/GentooService";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const useGentoo = () => {
    const router = useRouter();
    const homePath = '/'; // 홈 페이지 경로 | null
    const subPathList = ['/products']; // 서브 페이지 경로 | []

    // SDK 스크립트 로드 및 초기화 (한 번만 실행)
    useEffect(() => {
        const isLoadEnabled = router.asPath === homePath || subPathList.some(path => router.asPath.startsWith(path));
        if (typeof window === "undefined") return;

        if (window.GentooIO) {
            return;
        }

        GentooService.loadScript()
            .then(() => {
                GentooService.boot({
                    partnerId: process.env.NEXT_PUBLIC_PARTNER_ID,
                    authCode: process.env.NEXT_PUBLIC_AUTH_CODE,
                    itemId: process.env.NEXT_PUBLIC_ITEM_ID,
                    displayLocation: "HOME",
                });
                if (isLoadEnabled) {
                    GentooService.init();
                }
            })
            .catch((error) => {
                console.error("GentooService: Failed to load SDK script.", error);
            });
    }, []);

    // 라우트 변경 시 'init' 메서드 호출
    useEffect(() => {
        if (typeof window === "undefined") return;

        const handleRouteChange = (url) => {
            const isLoadEnabled = url === homePath || subPathList.some(path => url.startsWith(path));

            if (window.GentooIO) {
                GentooService.unmount();
            }
            
            if (isLoadEnabled && window.GentooIO) {
                if (!window.fb) {
                    // Re-run boot if instance was destroyed
                    GentooService.boot({
                        partnerId: process.env.NEXT_PUBLIC_PARTNER_ID,
                        authCode: process.env.NEXT_PUBLIC_AUTH_CODE,
                        itemId: process.env.NEXT_PUBLIC_ITEM_ID,
                        displayLocation: "HOME",
                    });
                }
                GentooService.init();
            } else if (!isLoadEnabled && window.GentooIO) {
                GentooService.unmount();
            }
        };

        router.events.on("routeChangeComplete", handleRouteChange);

        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events]);
};
