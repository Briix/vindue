export default function Browser({ height, width, image, browserRef }) {
  return (
      <svg width={width} height={height + 30} viewBox={`0 0 ${width} ${height + 30}`} fill="none"
        ref={browserRef}
        style={{
          borderRadius: '8px 8px 8px 8px',
          boxShadow: '0px 22px 70px 5px rgba(0,0,0,0.56)'
        }}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink">
        <rect x="0" y="0" width={width} height="30" fill="#E8E8E8" />
        <circle cx="14" cy="15" r="6" fill="#EF1010"/>
        <circle cx="30" cy="15" r="6" fill="#EFD910"/>
        <circle cx="46" cy="15" r="6" fill="#14EF10"/>

        <image y="30" width={width} height={height} xlinkHref={image} />
      </svg>
  )
}
