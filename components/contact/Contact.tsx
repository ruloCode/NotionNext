import React from "react";
import Image from "next/image";
import imageSrc from "../../public/images/contacto2.jpeg";
import imageSrc1 from "../../public/images/contacto1.jpeg";

const ContactSection = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center justify-center">
          <a href="https://www.ejemplo.com" target="blank">
            <Image
              width={2000}
              height={1000}
              alt={`contacto`}
              src={imageSrc1}
            />
          </a>
        </div>
        <div className="flex flex-col items-center justify-center">
          <a href="https://www.ejemplo.com" target="blank">
            <Image width={2000} height={1000} alt={`contacto`} src={imageSrc} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
