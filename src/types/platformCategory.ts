export type PlatformCategory =
  | 'pc'
  | 'playstation'
  | 'xbox'
  | 'nintendo'
  | 'apple'
  | 'linux'
  | 'android'
  | 'iphone'
  | 'web';

export const PLATFORM_MATCHERS: [RegExp, PlatformCategory][] = [
  [/playstation/i, 'playstation'],
  [/xbox/i, 'xbox'],
  [/nintendo/i, 'nintendo'],
  [/pc/i, 'pc'],
  [/(mac|apple)/i, 'apple'],
  [/linux/i, 'linux'],
  [/android/i, 'android'],
  [/(ios|iphone)/i, 'iphone'],
  [/web/i, 'web'],
];
