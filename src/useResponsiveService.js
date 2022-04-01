import { useEffect } from 'react';
import { responsiveSerivce } from './responsiveService';

const screenSizesEnum = {
    screen4k: {
        width: 2560,
    },
    laptopL: {
        width: 1440,
    },
    laptop: {
        width: 1024,
    },
    tablet: {
        width: 768,
    },
    mobileL: {
        width: 425,
    },
    mobileM: {
        width: 375,
    },
    mobileS: {
        width: 320,
    },
};

export const useResponsiveService = () => {
    const checkWidth = () => {
        if (window.innerWidth >= screenSizesEnum.screen4k.width) {
            responsiveSerivce.send("GO_SCREEN4K");
        }
        if (window.innerWidth >= screenSizesEnum.laptopL.width && window.innerWidth < screenSizesEnum.screen4k.width) {
            responsiveSerivce.send("GO_LAPTOP_L");
        }
        if (window.innerWidth >= screenSizesEnum.laptop.width && window.innerWidth < screenSizesEnum.laptopL.width) {
            responsiveSerivce.send("GO_LAPTOP");
        }
        if (window.innerWidth >= screenSizesEnum.tablet.width && window.innerWidth < screenSizesEnum.laptop.width) {
            responsiveSerivce.send("GO_TABLET");
        }
        if (window.innerWidth >= screenSizesEnum.mobileL.width && window.innerWidth < screenSizesEnum.tablet.width) {
            responsiveSerivce.send("GO_MOBILE_L");
        }
        if (window.innerWidth >= screenSizesEnum.mobileM.width && window.innerWidth < screenSizesEnum.mobileL.width) {
            responsiveSerivce.send("GO_MOBILE_M");
        }
        if (window.innerWidth >= screenSizesEnum.mobileS.width && window.innerWidth < screenSizesEnum.mobileM.width) {
            responsiveSerivce.send("GO_MOBILE_S");
        }
    };
    useEffect(() => {
        window.addEventListener("resize", checkWidth);
        checkWidth();
        () => {
            window.removeEventListener("resize", checkWidth);
        }
    }, [window.innerWidth]);
}
