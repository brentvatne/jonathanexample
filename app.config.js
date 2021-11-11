const IS_UAT = Boolean(process.env.IS_UAT);

export default {
  name: IS_UAT ? "jonathanexample UAT" : "jonathanexample",
  slug: "jonathanexample",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: IS_UAT ? "com.notbrent.jonathanexample.uat" : "com.notbrent.jonathanexample",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#FFFFFF",
    },
    package: IS_UAT ? "com.notbrent.jonathanexample.uat" : "com.notbrent.jonathanexample",
  },
  web: {
    favicon: "./assets/favicon.png",
  },
};
