import { AIAdvisorPreview } from "../components/home/AIAdvisorPreview";
import { CollectionPreview } from "../components/home/CollectionPreview";
import { FeaturedWatches } from "../components/home/FeaturedWatches";
import { Hero } from "../components/home/Hero";
import { HomeCTA } from "../components/home/HomeCTA";
import { MarketplacePreview } from "../components/home/MarketplacePreview";
import { ShowroomPreview } from "../components/home/ShowroomPreview";
import { WhatIsWatchWardrobe } from "../components/home/WhatIsWatchWardrobe";
import { Categories } from "./../components/home/Categories";

export function Home() {
  return (
    <div>
      <Hero />
      <WhatIsWatchWardrobe />
      <FeaturedWatches />
      <Categories />
      <CollectionPreview />
      <ShowroomPreview />
      <AIAdvisorPreview />
      <MarketplacePreview />
      <HomeCTA />
    </div>
  );
}
