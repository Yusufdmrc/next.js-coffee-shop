import Image from "next/image";
import Title from "./UI/Title";

const CampaignItem = () => {
  return (
    <div className="bg-secondary flex items-center gap-x-4 py-6 px-[18px] flex-1 rounded-xl">
      <div
        className="relative md:w-44 md:h-44 w-36 h-36 after:content-[''] border-[8px] border-primary
        rounded-full overflow-hidden
      "
      >
        <Image
          src="/images/campaign.jpg"
          alt="campaign"
          layout="fill"
          objectFit="cover"
          className="hover:scale-105 transition-all"
        />
      </div>
      <div className="text-white">
        <Title addClass="text-3xl">Great Friday</Title>
        <div className="font-sans my-2">
          <span className="text-[46px]">25%</span>
          <span className="text-sm inline-block ml-2">Off</span>
        </div>
        <button className="btn flex items-center">Order Now</button>
      </div>
    </div>
  );
};

const Campaigns = () => {
  return (
    <div className="container flex justify-between mx-auto py-16 gap-7 flex-wrap">
      <CampaignItem />
      <CampaignItem />
    </div>
  );
};

export default Campaigns;
