import css from "./Footer.module.css";
import youtubeImg from "../../assets/img/Youtube.svg";
import instagramImg from "../../assets/img/instagram.svg";
import twitterImg from "../../assets/img/twitter.svg";
import facebookImg from "../../assets/img/facebook.svg";
import SocialLink from "../../components/SocialLink";
import Link from "next/link";

const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/",
    iconUrl: facebookImg,
    description: "facebook icon",
  },
  {
    href: "https://twitter.com/",
    iconUrl: twitterImg,
    description: "twiiter icon",
  },
  {
    href: "https://www.youtube.com/",
    iconUrl: youtubeImg,
    description: "youtube icon",
  },
  {
    href: "https://www.instagram.com/",
    iconUrl: instagramImg,
    description: "instagram icon",
  },
];
const socialLinks = SOCIAL_LINKS.map((link) => {
  return <SocialLink key={link.href} link={link} />;
});
export function Footer() {
  return (
    <div className={css.root}>
      <div className={css.since}>©codeit - 2023</div>
      <div className={css.extraSites}>
        <Link href="">Privacy Policy</Link>
        <Link href="">FAQ</Link>
      </div>
      <div className={css.icons}>{socialLinks}</div>
    </div>
  );
}
