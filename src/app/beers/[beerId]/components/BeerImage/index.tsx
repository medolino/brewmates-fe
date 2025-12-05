import Image from 'next/image'

import { BeerImageProps } from './interfaces'

const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL

export default function BeerImage(props: BeerImageProps) {
  const { style, name } = props

  const urlEncodedStyle = encodeURIComponent(style)

  const imageUrl = `${apiBaseUrl}/api/beer-photos/${urlEncodedStyle}`

  return (
    <Image
      src={imageUrl}
      alt={`Brew Mates Beer - ${name}`}
      width={500}
      height={500}
      style={{ width: '100%', height: 'auto' }}
    />
  )
}
