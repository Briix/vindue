import Head from 'next/head'
import { useState, useRef } from 'react'
import reset from 'styled-reset'
import Sidebar from '../components/Sidebar'
import Browser from '../components/Browser'
import ImageUpload from '../components/ImageUpload'
import styled from 'styled-components'

const SiteContainer = styled.main`
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding-right: 300px;
`

export default function Home() {
  const [image, setImage] = useState({})
  const browserWindow = useRef(null)

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
        ? <Browser width={image.width} height={image.height} image={image.image} browserRef={browserWindow}/>
        : <ImageUpload setImage={setImage} />
      }
      <Sidebar browserRef={browserWindow} image={image.image}/>
    </SiteContainer>
  )
}
