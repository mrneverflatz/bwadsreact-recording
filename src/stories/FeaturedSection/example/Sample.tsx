import React from "react";

import FeaturedSection from "../../../components/FeaturedSection";
import Button from "../../../components/Button";

type Props = {};

function Sample({}: Props) {
  return (
    <div className="my-20 gap-y-28 flex flex-col">
      <FeaturedSection
        badge={{
          title: "Interview",
          content: "Before taking any program it is good to choose the path",
        }}
        button={
          <Button state="secondary">
            <a href="">Learn More</a>
          </Button>
        }
        content={{
          preheading: "better career",
          heading: "Prepare The Journey",
          paragraph:
            "We do really care to our students’ future career so it would be good if you are taking a quick interview",
        }}
        image="/images/image-2.jpg"
        number={{ text: "1.", className: "bg-yellow" }}
      />

      <FeaturedSection
        badge={{
          title: "Focus",
          content: "Study and follow the journey based on your career path",
        }}
        button={
          <Button state="secondary">
            <a href="">View Demo</a>
          </Button>
        }
        content={{
          preheading: "STUDY HARDER",
          heading: "Finish The Project",
          paragraph:
            "Each of you will be joining the private group and also working together with team members on project",
        }}
        image="/images/image-3.jpg"
        number={{ text: "2.", className: "bg-purple" }}
      />

      <FeaturedSection
        badge={{
          title: "Final Gate",
          content: "Demonstration for your final project to the judges",
        }}
        button={
          <Button state="secondary">
            <a href="">Showcase</a>
          </Button>
        }
        content={{
          preheading: "END GAME",
          heading: "Big Demo Day",
          paragraph:
            "Learn how to speaking in public to demonstrate your final project and receive the important feedbacks",
        }}
        image="/images/image-4.jpg"
        number={{ text: "3.", className: "bg-green" }}
      />
    </div>
  );
}

export default Sample;
