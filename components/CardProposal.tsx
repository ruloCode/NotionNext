import Image from "next/image";
import Link from "next/link";

export const Card = ({ imageSrc, alt, title, description, direction, id }) => {
  return (
    <div className="w-full">
        <div id={id} className={`border  rounded-md overflow-hidden flex flex-row ${direction === "right" ? "flex-row-reverse" : ""}   `}>
          <div className="relative h-0 pb-[56.25%] flex-1">
            <Image src={imageSrc} alt={alt} layout="fill" objectFit="cover" className="mr-4" />
          </div>
          <div className="p-4 flex-1">
            <h2 className="text-xl font-bold mb-2 secondaryFont">{title}</h2>
            <p className="text-gray-700">{description}</p>
          </div>
        </div>
      </div>
  );
};

export default Card;
