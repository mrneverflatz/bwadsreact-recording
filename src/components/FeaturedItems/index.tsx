import { ReactNode } from "react";

type TFeature = {
  key: string;
  title: string;
  paragraph: string;
  icon: ReactNode;
};

type Props = {
  features: TFeature[];
};

function FeaturedItems({ features }: Props) {
  return (
    <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:px-32 gap-8 place-content-center">
      {features.map((feature) => {
        return (
          <div className="group" key={feature.key}>
            <div className="flex flex-col gap-y-3 items-center md:items-start">
              <span className="w-14 h-14 flex items-center justify-center rounded-full group-odd:bg-green group-even:bg-purple">
                {feature.icon}
              </span>
              <h6 className="text-navy font-medium text-xl">{feature.title}</h6>
              <p className="text-grey">{feature.paragraph}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FeaturedItems;
