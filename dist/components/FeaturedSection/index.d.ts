import { ReactNode } from "react";
declare type Props = {
    number: {
        text: ReactNode;
        className: string;
    };
    content: {
        preheading: string;
        heading: string;
        paragraph: string;
    };
    button: ReactNode;
    badge: {
        title: string;
        content: string;
    };
    image: string | ReactNode;
};
declare function FeaturedSection({ number, content, button, badge, image }: Props): JSX.Element;
export default FeaturedSection;
