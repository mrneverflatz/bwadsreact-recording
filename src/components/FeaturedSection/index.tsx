import { ReactNode } from "react";

type Props = {
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

function FeaturedSection({ number, content, button, badge, image }: Props) {
  return (
    <div className="container mx-auto px-4 group">
      <div className="flex flex-col md:flex-row items-center justify-center gap-y-20 md:gap-y-0 gap-x-16 md:gap-x-28 xl:gap-x-36">
        <div className="w-full md:w-4/12 2xl:w-3/12 md:group-odd:order-2 md:group-even:order-1">
          <h3 className="text-green uppercase font-semibold mb-3">
            {content.preheading || "Pre Heading"}
          </h3>
          <h2 className="text-navy font-semibold text-[30px] mb-5">
            {content.heading || "Heading"}
          </h2>
          <h3 className="text-grey leading-8 mb-8">
            {content.paragraph || "Paragraph"}
          </h3>
        </div>
        <div className="relative md:group-odd:order-1 md:group-even:order-2">
          <div
            className={[
              "absolute rounded-full inline-flex items-center justify-center text-2xl font-semibold top-0 left-0 z-10 border-2 border-white text-white transform -translate-x-1/2 -translate-y-1/2 p-4 w-14 h-14",
              number.className || "bg-green",
            ].join(" ")}
          >
            {number.text}
          </div>
          <div className="absolute rounded-xl bottom-0 right-0 bg-white z-10 transform translate-x-4 translate-y-4 md:translate-x-1/4 xl:translate-x-1/2 xl:translate-y-1/2 p-4 w-56">
            <span className="flex items-center gap-x-2 mb-2">
              <span className="w-5 h-5 p-1 bg-green rounded-full flex items-center justify-center">
                <svg
                  viewBox="0 0 12 8"
                  fill="none"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M1.83325 4L4.46483 6.5L10.1666 1.5"
                    className="stroke-white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span className="text-navy font-medium">{badge.title}</span>
            </span>
            <p className="text-grey text-sm hidden md:block">{badge.content}</p>
          </div>
          <div className="relative max-w-full w-[240px] h-[340px] xl:w-[340px] xl:h-[440px] rounded-tr-[59px] rounded-bl-[59px] rounded-tl-3xl rounded-br-3xl overflow-hidden">
            {typeof image === "string" ? (
              <img src={image} alt={badge.title} />
            ) : (
              image
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedSection;
