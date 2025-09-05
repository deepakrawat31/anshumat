import { CopyrightIcon } from "@phosphor-icons/react/ssr";
import Image from "next/image";
import footerImg from "../../public/footer.webp";

export default function Footer() {
  return (
    <footer className="bg-primary text-on-primary wfull flex min-h-[80dvh] flex-col justify-between gap-4 p-4">
      <div className="flex flex-1 flex-col gap-8 md:flex-row">
        <div className="flex w-full max-w-xs flex-col gap-20">
          <span className="space-y-4">
            <h3 className="text-4xl">Anshumat</h3>
            <p className="text-sm">Make chnage happen</p>
          </span>
          <span className="flex justify-between gap-8">
            <span className="flex flex-col gap-8">
              <h4>Quick Links</h4>
              <ul className="flex flex-col gap-2 **:hover:underline **:hover:underline-offset-2">
                <li>
                  <a href="/">About Us</a>
                </li>
                <li>
                  <a href="/">Our Impact</a>
                </li>
                <li>
                  <a href="/">Partners</a>
                </li>
                <li>
                  <a href="/">Contact</a>
                </li>
              </ul>
            </span>
            <span className="flex flex-col gap-8">
              <h4>Get Involved</h4>
              <ul className="flex flex-col gap-2 **:hover:underline **:hover:underline-offset-2">
                <li>
                  <a href="/">Join Our Team</a>
                </li>
                <li>
                  <a href="/">Sponsor</a>
                </li>
                <li>
                  <a href="/">Donate</a>
                </li>
              </ul>
            </span>
          </span>
        </div>
        <div className="relative isolate min-h-[40dvh] flex-1 overflow-hidden">
          <Image
            src={footerImg}
            alt="Footer image"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-bottom opacity-80"
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <h6 className="flex items-start gap-1">
          <span>
            <CopyrightIcon size={20} />
          </span>
          <span>2025</span>
        </h6>
        <ul className="flex gap-4 **:hover:underline **:hover:underline-offset-2">
          <li>
            <a href="/">Privacy Policy</a>
          </li>
          <li>
            <a href="/">Terms of Use</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
