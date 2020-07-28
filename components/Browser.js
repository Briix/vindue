import styled, { css } from 'styled-components'

const BrowserContainer = styled.div`
  padding: 32px;

  ${props => props.width && css`
    width: ${props.width}px;
  `}

  ${props => props.height && css`
    height: ${props.height + 64}px;
  `}
`

const BrowserWindow = styled.div`
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0px 0px 20px #acacac;;
  border: 1px solid #acacac;
`

const TitleBar = styled.div`
  background-image: linear-gradient(top, #ebebeb, #d5d5d5);
  background: -webkit-linear-gradient(top, #ebebeb, #d5d5d5);
  background-color: #4d494d;
  border-top: 1px solid #f3f1f3;
  border-bottom: 1px solid #b1aeb1;
  height: 20px;
`

const TitleBarButtonContainer = styled.div`
  padding: 2px 0 0 6px;
`

const TitleBarButton = styled.div`
  width: 11px;
  height: 11px;
  display: inline-block;
  border-radius: 50%;
  margin-left: 6px;

  ${props => props.bgColor && css`
    background-color: ${props.bgColor};
  `}

  ${props => props.borderColor && css`
    border: 1px solid ${props.borderColor};
  `}
`

export default function Browser({ height, width, image, browserRef }) {
  return (
    <BrowserContainer ref={browserRef} height={height} width={width}>
      <BrowserWindow>
        <TitleBar>
          <TitleBarButtonContainer>
            <TitleBarButton bgColor={'#ff5c5c'} borderColor={'#e33e41'} />
            <TitleBarButton bgColor={'#ffbd4c'} borderColor={'#e09e3e'} />
            <TitleBarButton bgColor={'#00ca56'} borderColor={'#14ae46'} />
          </TitleBarButtonContainer>
        </TitleBar>
        <img src={image} />
      </BrowserWindow>
    </BrowserContainer>
  )
}
