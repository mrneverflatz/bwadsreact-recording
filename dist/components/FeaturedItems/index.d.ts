import { ReactNode } from "react";
declare type TFeature = {
    key: string;
    title: string;
    paragraph: string;
    icon: ReactNode;
};
declare type Props = {
    features: TFeature[];
};
declare function FeaturedItems({ features }: Props): JSX.Element;
export default FeaturedItems;
