// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  name: "development",
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
