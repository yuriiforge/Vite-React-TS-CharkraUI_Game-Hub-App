import {
  PLATFORM_MATCHERS,
  type PlatformCategory,
} from '@/types/platformCategory';

export const getPlatformCategory = (slug: string): PlatformCategory | null => {
  for (const [regex, category] of PLATFORM_MATCHERS) {
    if (regex.test(slug)) return category;
  }
  return null;
};
