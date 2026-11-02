import { CapacitorConfig } from '@capacitor/cli';
const config: CapacitorConfig = {
  appId: 'vn.quanso.doi7.offline',
  appName: 'Quản lý quân số Đội 7',
  webDir: 'www',
  bundledWebRuntime: false,
  server: { androidScheme: 'https' }
};
export default config;
