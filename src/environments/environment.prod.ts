export const environment = {
  name: "production",
  production: false,
  appName: "XCEED365 HCM",
  apiAccess: {
        "coreDataApi": "https://globalapi.xceed365.com/api"
    },
    signinCoordinates: {
        "tenant": "common",
        "instance": "https://login.microsoftonline.com/",
        "clientId": "f227b60a-44f3-4965-b5ea-19938cd71554",
        "redirectUri": "http://localhost:5818/authorization",
        "postLogoutRedirectUri": "http://localhost:5818/"
    }
};
