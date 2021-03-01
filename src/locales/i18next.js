import localES from './es.json'
import localEN from './en.json'

import i18next from "i18next";

i18next.init(
    {
        fallbackLng: "en",
        lng: "es",
        debug: true,
        resources: {
            es: {
                translation:
                    localES
            },
            en: {
                translation:
                    localEN
            },
        },
    },
    function (err, t) {
        // initialized and ready to go!
        /* document.getElementById("output").innerHTML = i18next.t("key"); */
    }
);