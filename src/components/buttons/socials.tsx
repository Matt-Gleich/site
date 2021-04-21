import { ReactElement } from 'react'
import styled from 'styled-components'

const Icon = styled.img`
  filter: invert(100%) saturate(0%);
  margin-right: 20px;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

export function SocialMediaButton({
  name,
  icon,
  socials,
}: {
  name: string
  icon?: string
  socials: Record<string, string>[]
}): ReactElement {
  const lowerCaseName = name.toLowerCase()
  const iconName = icon == '' ? icon : lowerCaseName
  const size = '30px'

  // Getting URL
  let url: string
  for (const account of socials) {
    if (account['name'] == lowerCaseName) {
      url = account['url']
    }
  }

  return (
    <a href={url} title={name} target="_blank" rel="noreferrer">
      <Icon
        src={`/images/socials/${iconName}.svg`}
        height={size}
        width={size}
        alt={name}
      />
    </a>
  )
}
