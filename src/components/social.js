import React from 'react'
import PropTypes from 'prop-types'
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
  <ul className="flex space-x-5 lg:space-x-4">
    {socialData.map((item, i) => {
      const Icon = Icons[item.label]
      return (
        <li key={i}>
          <a
            href={item.url}
            alt={item.label}
            aria-label={item.label}
            target="_blank"
            rel="noopener noreferrer"
            className="text-default hover:text-mint transition duration-500"
          >
            <Icon className="w-5 h-5 lg:w-4 lg:h-4" />
          </a>
        </li>
      )
    })}
  </ul>
)

export default Social

Social.propTypes = {
  socialData: PropTypes.array.isRequired
}
