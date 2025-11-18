export default {
  name: "UrbanNatureAR",
  slug: "urban-nature-ar",
  version: "1.0.0",
  
  // App icon
  icon: "./assets/images/logo.png",
  
  ios: {
    bundleIdentifier: "com.caroline.urbannaturear"
  },
  
  android: {
    package: "com.caroline.urbannaturear"
  },
  
  experiments: {
    typedRoutes: true
  },

  extra: {
    eas: {
      projectId: "72eddef6-e943-4101-93a9-a625f731abe0"
    }
  }
};