import { footerLinks } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="py-20 bg-black px-10">
      <div className="flex justify-between items-start gap-20 flex-wrap">
        <div className="flex flex-col items-start">
          <Link href="/">
            <Image
              alt="logo"
              src="/assets/images/footer-logo.svg"
              width={120}
              height={80}
            />
          </Link>
          <p className="text-white/70 sm:max-w-sm mt-5">
            Get shoes ready for the new term at your nearest Nike store. Find
            your perfect Size In Store. Get Rewards
          </p>

          {/* social icons */}
          <div className="flex items-center gap-5 mt-8">
            <div className="bg-white rounded-full w-[50px] h-[50px] flex items-center justify-center">
              <BiLogoFacebook size={25} />
            </div>
            <div className="bg-white rounded-full w-[50px] h-[50px] flex items-center justify-center">
              <BiLogoTwitter size={25} />
            </div>
            <div className="bg-white rounded-full w-[50px] h-[50px] flex items-center justify-center">
              <BiLogoInstagram size={25} />
            </div>
          </div>
        </div>

        <div className="flex flex-1 justify-between gap-10 flex-wrap">
          {footerLinks.map((section, index) => (
            <div key={index} className="flex flex-col">
              <h4 className="text-white text-xl font-semibold mb-2">
                {section.title}
              </h4>
              {section.links.map((link, index) => (
                <Link
                  href="/"
                  className="mt-3 text-white/70 hover:text-slate-600"
                  key={index}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-white/70 mt-24">
        <p>©️ Copyright. All rights reserved.</p>
        <p>Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
