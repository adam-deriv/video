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
        if (window.outerWidth >= screenSizesEnum.screen4k.width) {
            responsiveSerivce.send("GO_SCREEN4K");
        }
        if (window.outerWidth >= screenSizesEnum.laptopL.width && window.outerWidth < screenSizesEnum.screen4k.width) {
            responsiveSerivce.send("GO_LAPTOP_L");
        }
        if (window.outerWidth >= screenSizesEnum.laptop.width && window.outerWidth < screenSizesEnum.laptopL.width) {
            responsiveSerivce.send("GO_LAPTOP");
        }
        if (window.outerWidth >= screenSizesEnum.tablet.width && window.outerWidth < screenSizesEnum.laptop.width) {
            responsiveSerivce.send("GO_TABLET");
        }
        if (window.outerWidth >= screenSizesEnum.mobileL.width && window.outerWidth < screenSizesEnum.tablet.width) {
            responsiveSerivce.send("GO_MOBILE_L");
        }
        if (window.outerWidth >= screenSizesEnum.mobileM.width && window.outerWidth < screenSizesEnum.mobileL.width) {
            responsiveSerivce.send("GO_MOBILE_M");
        }
        if (window.outerWidth >= screenSizesEnum.mobileS.width && window.outerWidth < screenSizesEnum.mobileM.width) {
            responsiveSerivce.send("GO_MOBILE_S");
        }
    };
    useEffect(() => {
        window.addEventListener("resize", checkWidth);
        checkWidth();
        () => {
            window.removeEventListener("resize", checkWidth);
        }
    }, [window.outerWidth]);
}
