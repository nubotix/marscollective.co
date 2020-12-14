import React from 'react'
import {
  FaBehance as Behance,
  FaDribbble as Dribbble,
  FaEnvelope as Email,
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

const Social = ({ socialLinks }) => (
  <ul className="flex m-0 space-x-8 list-none">
    {socialLinks.map((link, i) => {
      const Icon = Icons[link.label]
      return (
        <li key={i}>
          <a
            href={link.url}
            title={link.label}
            target="_blank"
            rel="noopener noreferrer"
            className="text no-underline transition duration-500 hover:text-highlight"
          >
            <div className="w-6">
              <Icon />
            </div>
          </a>
        </li>
      )
    })}
  </ul>
)

export default Social
