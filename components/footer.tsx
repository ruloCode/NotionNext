import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";
import LogoImage from '../public/images/Text.png'
import Image from 'next/image'


export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>

        <div className="mt-8 flex flex-col lg:flex-row items-center justify-center gap-8 flex-col text-lg ">
        {/* <p className="secondaryFont">Nelson Guevara Farfan</p> */}

        <div >
          {/* <Link href="/" className=""> */}
            <Image
              src={LogoImage}
              alt="Logo"
              // width={50}
              // height={50}
              className="h-16 w-auto"
            />
          {/* </Link> */}
      </div>

        </div>

        <div className="py-16 flex lg:flex-row items-center justify-center gap-8 text-lg">
          <a
            href="https://www.facebook.com/nelson.guevarafarfan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-square  socialIcon "></i>
          </a>
          <a
            href="https://www.instagram.com/nelson.guevarafarfan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram socialIcon"></i>
          </a>
          <a
            href="https://twitter.com/NelsonGuevaraF"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter socialIcon"></i>
          </a>
          <a
            href="https://www.tiktok.com/@nelsonguevarafarfan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-tiktok socialIcon"></i>
          </a>
        </div>
      </Container>
    </footer>
  );
}
