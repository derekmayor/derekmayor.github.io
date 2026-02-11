import { SITE } from "../config";

export const getPath = (slug: string) => {
  return `${SITE.base}/posts/${slug}`;
};
