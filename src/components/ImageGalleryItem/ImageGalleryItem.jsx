export const ImageGalleryItem = ({webformatURL}) => {
    return (
        <li className="gallery-item" >
  <img src={webformatURL} alt="cat" />
</li>
    )
}