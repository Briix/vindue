import Head from 'next/head'
import { useState } from 'react'
import reset from 'styled-reset'
import { SiteContainer } from './index.styles'
import Sidebar from '../components/Sidebar'
import Browser from '../components/Browser'
import ImageUpload from '../components/ImageUpload'

export default function Home() {
  const [image, setImage] = useState({})

  return (
    <SiteContainer>
      <Head>
        <title>Vindue</title>
        <link rel="icon" href="/favicon.ico" />
        <style>{`
          ${reset}
        `}</style>
      </Head>

      {image.image
        ? <Browser width={image.width} height={image.height} image={image.image} />
        : <ImageUpload setImage={setImage} />
      }
      <Sidebar />
    </SiteContainer>
  )
}
