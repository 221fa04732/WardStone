import { Timeline } from "@/components/ui/timeline";

enum urlType {
    "image",
    "video"
}

export type CompanyOverviewType = {
    title : string,
    description : string,
    url : string,
    type : urlType
}

const CompanyOverviewData : CompanyOverviewType[] = [{
    title : "Constellation Capable",
    description : "Our Constellation provides redundant global coverage ensuring defense from any known or unknown launch location.",
    url : "/item1.mp4",
    type : urlType.video
},{
    title : "A Step Beyond Deterrence",
    description : "Nuclear deterrence only works if dealings involve rational actors. Wardstone provides defensive capabilities to ensure security beyond deterrence.",
    url : "/item2.png",
    type : urlType.image
},{
    title : "Physical Space Defense",
    description : "Our satellites intercept and kinetically neutralize a variety of orbital-speed space threats.",
    url : "/item3.jpg",
    type : urlType.image
}]

export function CompanyOverview() {    
  return (<div className="relative w-11/12 md:w-10/12 overflow-clip md:pt-16">
      <Timeline data={CompanyOverviewData} />
    </div>
  );
}
