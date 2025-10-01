import { XMLParser } from "fast-xml-parser";
import type { IRssItem } from "~/shered/types";

export function useRssFeed(url: string) {
  return useFetch(url, {
    transform: (xml: string): IRssItem[] => {
      const parser = new XMLParser({ ignoreAttributes: false });
      const parsed = parser.parse(xml);
      const items = parsed.rss.channel.item || [];

      return items.map((i: any) => ({
        title: i.title,
        link: i.link,
        description: i.description,
        pubDate: i.pubDate,
      }));
    },
  });
}
