import htmlToImage from 'html-to-image'

export default function Download({ browserRef }) {
  const handleDownload = () => {
    const svg = browserRef.current

    htmlToImage.toPng(svg)
      .then(function (dataUrl) {
        const link = document.createElement('a')
        link.download = 'test'
        link.href = dataUrl

        link.click()
      });
  }

  return (
      <button onClick={handleDownload}>Download</button>
  )
}
