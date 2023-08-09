import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'Ibisokozo',
  webDir: 'dist/ng-ibisokozo-app',
  server: {
    androidScheme: 'https'
  }
};

export default config;
