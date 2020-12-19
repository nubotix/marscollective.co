import React from 'react'
import tw from 'twin.macro'
import {
  FaBehance as Behance,
  FaDribbble as Dribbble,
  FaFacebookSquare as Facebook,
  FaGithub as Github,
  FaInstagram as Instagram,
  FaMediumM as Medium,
  FaFacebookMessenger as Messenger,
  FaGlobeAmericas as Site,
  FaTelegramPlane as Telegram,
  FaTwitter as Twitter,
  FaWhatsapp as WhatsApp
} from 'react-icons/fa'
import { BiEnvelope as Email } from 'react-icons/bi'

const Icons = {
  Behance,
  Dribbble,
  Email,
  Facebook,
  Github,
  Instagram,
  Medium,
  Messenger,
  Site,
  Telegram,
  Twitter,
  WhatsApp
}

const Social = ({ socialData }) => (
  <ul css={[tw`flex space-x-4`]}>
    {socialData.map((item, i) => {
      const Icon = Icons[item.label]
      return (
        <li css={[tw`hover:text-mint transition duration-500`]} key={i}>
          <a
            href={item.url}
            alt={item.label}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon size={20} />
          </a>
        </li>
      )
    })}
  </ul>
)

export default Social
