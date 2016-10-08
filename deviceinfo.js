/**
 * @providesModule react-native-device-info
 */

import { NativeModules, Platform } from 'react-native';
const { RNDeviceInfo } = NativeModules;

export default {
  getUniqueID() {
    return RNDeviceInfo.uniqueId;
  },
  getInstanceID() {
    return RNDeviceInfo.instanceId;
  },
  getDeviceId() {
    return RNDeviceInfo.deviceId;
  },
  getManufacturer() {
    return RNDeviceInfo.systemManufacturer;
  },
  getModel() {
    return RNDeviceInfo.model;
  },
  getBrand() {
    return RNDeviceInfo.brand;
  },
  getSystemName() {
    return RNDeviceInfo.systemName;
  },
  getSystemVersion() {
    return RNDeviceInfo.systemVersion;
  },
  getBundleId() {
    return RNDeviceInfo.bundleId;
  },
  getBuildNumber() {
    return RNDeviceInfo.buildNumber;
  },
  getVersion() {
    return RNDeviceInfo.appVersion;
  },
  getReadableVersion() {
    return RNDeviceInfo.appVersion + "." + RNDeviceInfo.buildNumber;
  },
  getDeviceName() {
    return RNDeviceInfo.deviceName;
  },
  getUserAgent() {
    return RNDeviceInfo.userAgent;
  },
  getDeviceLocale() {
    return RNDeviceInfo.deviceLocale;
  },
  getDeviceCountry() {
    return RNDeviceInfo.deviceCountry;
  },
  getTimezone() {
    return RNDeviceInfo.timezone;
  },
  getMacAddress() {
    return RNDeviceInfo.macAddress;
  },
  getIdfa() {
    if (Platform === 'android') return '';
    return RNDeviceInfo.idfa;
  },
  getImei() {
    if (Platform === 'ios') return '';
    return RNDeviceInfo.imei;
  },
}