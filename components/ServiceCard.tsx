import Image from "next/image";
import { ReactNode } from "react";
import { IconType } from "react-icons";

interface Props {
  service: {
    icon: IconType;
    label: string;
    subtext: string;
  };
}

const ServiceCard = ({ service }: Props) => {
  return (
    <div className="flex flex-col w-[350px] rounded-xl shadow-2xl p-5">
      <div className="flex gap-x-2 items-center">
        {<service.icon size={20} />}
        <h2 className="text-xl font-bold">{service.label}</h2>
      </div>
      <p className="text-slate-500 mt-1">{service.subtext}</p>
    </div>
  );
};

export default ServiceCard;
