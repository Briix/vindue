import { StyledSidebar } from './Sidebar.styles'
import Logo from './Logo'
import Download from './Download'

export default function Sidebar({ browserRef, image }) {
  return (
    <StyledSidebar>
      <Logo />
      {image && <Download browserRef={browserRef} />}
    </StyledSidebar>
  )
}
