export default {
    API_URL: process.env.VUE_APP_API_URL,
    AXIOS_WITH_CREDENTIALS: process.env.VUE_APP_AXIOS_WITH_CREDENTIALS === 'true',
    AXIOS_TIMEOUT: process.env.VUE_APP_AXIOS_TIMEOUT !== undefined ? +process.env.VUE_APP_AXIOS_TIMEOUT : 10000,
    STORAGE_PREFIX: process.env.VUE_APP_STORAGE_PREFIX,
    GOOGLE_ANALYTICS_ID: process.env.VUE_APP_GOOGLE_ANALYTICS_ID,
    VERSION: process.env.PACKAGE_VERSION ?? 'unknown'
};