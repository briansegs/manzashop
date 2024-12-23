import { section01Categories } from "./sections/section01/section01Categories";
import { section02Categories } from "./sections/section02/section02Categories";
import { section03Categories } from "./sections/section03/section03Categories";
import { section04Categories } from "./sections/section04/section04Categories";
import { section05Categories } from "./sections/section05/section05Categories";
import { section06Categories } from "./sections/section06/section06Categories";
import { section07Categories } from "./sections/section07/section07Categories";
import { adSection01 } from "./sections/adSection01/adSection01";
import { adSection02 } from "./sections/adSection02/adSection02";

export const bestBuy = {
  title: "best buy",
  id: "best-buy",
  btnImg: "/manzashops/assets/badge/best buy logo.png",
  href: "/",
  sections: [
    {
      id: "sec0001",
      sectionName: "main",
      sectionImg: "/manzashops/assets/badge/YouTube Thumbnail-4.png",
      categories: section01Categories,
    },
    {
      id: "sec0002",
      sectionName: "deals",
      sectionImg: "/manzashops/assets/badge/YouTube Thumbnail-5.png",
      categories: section02Categories,
    },
    {
      id: "adSec0001",
      ad: true,
      sectionName: "Ads 1",
      ads: adSection01,
    },
    {
      id: "sec0003",
      sectionName: "new-arrivals",
      sectionImg: "/manzashops/assets/badge/YouTube Thumbnail-6.png",
      categories: section03Categories,
    },
    {
      id: "sec0004",
      sectionName: "popular",
      sectionImg: "/manzashops/assets/badge/YouTube Thumbnail-7.png",
      categories: section04Categories,
    },
    {
      id: "adSec0001",
      ad: true,
      sectionName: "Collections",
      ads: adSection01,
    },
    {
      id: "sec0005",
      sectionName: "seasonal",
      sectionImg: "/manzashops/assets/badge/YouTube Thumbnail-2.png",
      categories: section05Categories,
    },
    {
      id: "adSec0002",
      ad: true,
      sectionName: "Coming Soon!",
      ads: adSection02,
    },
    {
      id: "sec0006",
      sectionName: "clearance",
      sectionImg: "/manzashops/assets/badge/YouTube Thumbnail-3.png",
      categories: section06Categories,
    },

    {
      id: "sec0007",
      sectionName: "recommended",
      sectionImg: "/manzashops/assets/badge/YouTube Thumbnail-2.png",
      categories: section07Categories,
    },
  ],
};