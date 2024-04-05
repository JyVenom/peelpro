'use client'
import Image from "next/image";
interface SocialIconProps {
  image: string;
  url: string;
  alt: string;
}
function VerticalSocialIcon({ image, url, alt }: SocialIconProps) {
  return (
    <a href={url} target="_blank">
      <Image width={96} height={96} className="w-24 h-24 py-4 hover:scale-105" src={image} alt={alt} />
    </a>
  );
}
export function VerticalSocials() {
  return (
    <div>
      <div className="flex flex-col w-full justify-between">
        <VerticalSocialIcon
          image={"/certik.svg"}
          url={"https://kys.web.app"}
          alt={"certik"}
        />
        <VerticalSocialIcon
          image={"/cmc.svg"}
          url={"https://kys.web.app"}
          alt={"cmc"}
        />
        <VerticalSocialIcon
          image={"/twitter.svg"}
          url={"https://kys.web.app"}
          alt={"twitter"}
        />
        <VerticalSocialIcon
          image={"/telegram.svg"}
          url={"https://kys.web.app"}
          alt={"telegram"}
        />
      </div>
    </div>
  );
}
function HorizontalSocialIcon({ image, url, alt }: SocialIconProps) {
  return (
    <a href={url} target="_blank">
      <Image width={64} height={64} className="w-16 h-16 px-2 hover:scale-105" src={image} alt={alt} />
    </a>
  );
}
export function HorizontalSocials() {
  return (
    <div>
      <div className="flex flex-row w-full justify-between">
        <HorizontalSocialIcon
          image={"/certik.svg"}
          url={"https://kys.web.app"}
          alt={"certik"}
        />
        <HorizontalSocialIcon
          image={"/cmc.svg"}
          url={"https://kys.web.app"}
          alt={"cmc"}
        />
        <HorizontalSocialIcon
          image={"/twitter.svg"}
          url={"https://kys.web.app"}
          alt={"twitter"}
        />
        <HorizontalSocialIcon
          image={"/telegram.svg"}
          url={"https://kys.web.app"}
          alt={"telegram"}
        />
      </div>
    </div>
  );
}
