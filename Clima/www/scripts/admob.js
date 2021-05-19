var admobid = {};

// TODO: replace the following ad units with your own
if (/(android)/i.test(navigator.userAgent)) {
    admobid = { // for Android
        banner: '',
        interstitial: '',
        rewardvideo: '',
    };
} else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
    admobid = { // for iOS
        banner: '',
        interstitial: '',
        rewardvideo: '',
    };
} else {
    admobid = { // for Windows Phone
        banner: '',
        interstitial: '',
        rewardvideo: '',
    };
}

function initAd() {
    if (!AdMob) { alert('admob plugin not ready'); return; }

    // this will create a banner on startup
    AdMob.createBanner({
        adId: admobid.banner,
        position: AdMob.AD_POSITION.BOTTOM_CENTER,
        overlap: false,
        offsetTopBar: false,
        bgColor: 'black'
    });
}