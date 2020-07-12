import { useRef } from 'react'

export default function ImageUpload({ setImage }) {
  const fileInput = useRef(null)
  const handleChange = (event) => {
    event.preventDefault()

    let reader = new FileReader()
    reader.onload = function() {
      const image = new Image()
      image.src = reader.result

      image.onload = function() {
        setImage({
          width: this.width,
          height: this.height,
          image: reader.result
        })
      }
    }

    reader.readAsDataURL(fileInput.current.files[0])
  }

  return (
    <input type="file" ref={fileInput} onChange={handleChange} />
  )
}
