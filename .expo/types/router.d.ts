/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/ForgetPassword` | `/OnBoard` | `/OnBoard02` | `/OnBoard03` | `/Personalize01` | `/Personalize02` | `/Personalize03` | `/SignIn` | `/SignUp` | `/SplashScreen` | `/_sitemap`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
