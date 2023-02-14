import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket , faHeartCirclePlus , faStar } from '@fortawesome/free-solid-svg-icons'

const StepsSection: React.FC = () => {
  const Steps = [
    {
      icon: faArrowRightToBracket,
      title: "Create your account",
      description:
        "Some text here Some text here Some text here Some text here Some text here Some text here text here Some text here Some text here",
    },
    {
      icon: faHeartCirclePlus,
      title: "Create your list",
      description:
        "Some text here Some text here Some text here Some text here Some text here Some text here text here Some text here Some text here",
    },
    {
      icon: faStar,
      title: "Rate your movies",
      description:
        "Some text here Some text here Some text here Some text here Some text here Some text here text here Some text here Some text here",
    },
  ];


  return (
    <div className="md:py-32 py-20 px-5 md:px-10 lg:px-32">
      <div className="md:text-3xl text-xl text-center font-semibold">
        Find your Movies, Series <p className="text-primColor">Faster!</p>
      </div>
      <div className="md:flex justify-between gap-28 ">
        {Steps.map((step, key) => (
          <div className=" md:w-1/3 mt-5 md:mt-20" key={key}>
            <FontAwesomeIcon icon={step.icon} width="28" />
            <p className="font-bold text-xl mt-2 ">{step.title}</p>
            <p className="md:text-sm text-xs mt-3">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepsSection;
