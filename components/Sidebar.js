import { StyledSidebar } from './Sidebar.styles'
import Logo from './Logo'
import Canvg from 'canvg'

export default function Sidebar({ browserRef }) {
  const handleDownload = () => {
    const svg = browserRef.current

    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const v = Canvg.fromString(ctx, svg.outerHTML)
    v.render().then(() => {
      const base64 = canvas.toDataURL("image/png")

      const link = document.createElement('a')
      link.download = 'test'
      link.href = base64

      link.click()
    })

  }

  return (
    <StyledSidebar>
      <Logo />

      <button onClick={handleDownload}>Download</button>
    </StyledSidebar>
  )
}
