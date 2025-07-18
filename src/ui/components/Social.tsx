import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaDev } from 'react-icons/fa'
import { IconType } from 'react-icons/lib/cjs'

const IconLink: React.FC<{
  link: string
  title: string
  Icon: IconType
  className?: string
}> = props => {
  const { link, title, Icon, className } = props
  // if the link starts with 'http://' or 'https://', its not local.
  const isNotLocal = /^https?:\/\//.test(link)

  return (
    <a
      {...{
        className: `Icon ${className}`,
        rel: isNotLocal ? 'noopener noreferrer' : undefined,
        target: '_blank',
        href: link,
        title
      }}
    >
      <Icon />
    </a>
  )
}

export const Github: React.FC = () => (
  <IconLink
    title="Check out my Github"
    link="https://github.com/chrismilson"
    Icon={FaGithub}
  />
)

export const Linkedin: React.FC = () => (
  <IconLink
    title="Have a look at my Linkedin"
    link="https://linkedin.com/in/chris-milson"
    Icon={FaLinkedin}
  />
)

export const Twitter: React.FC = () => (
  <IconLink
    title="...Tweet tweet"
    link="https://twitter.com/_shlappas"
    Icon={FaTwitter}
  />
)

export const Dev: React.FC = () => (
  <IconLink
    title="I have no posts here!!"
    link="https://dev.to/chrismilson"
    Icon={FaDev}
  />
)
