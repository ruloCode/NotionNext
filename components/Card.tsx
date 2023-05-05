import Image from 'next/image';
import Link from "next/link";

export const Card = ({ imageSrc, alt, title, description,id }) => {
    return (
      <div className="w-full sm:w-1/2 md:w-1/4 p-4">
      <Link href={`/propuestas#${id}`} className="">


        <div className="border rounded-md overflow-hidden card-container">
          <div className="relative h-0 pb-[56.25%]">
            <Image
              src={imageSrc}
              alt={alt}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2 secondaryFont">{title}</h2>
            <p className="text-gray-700">{description}</p>
          </div>
        </div>
      </Link>

      </div>
    );
  };

  export default Card