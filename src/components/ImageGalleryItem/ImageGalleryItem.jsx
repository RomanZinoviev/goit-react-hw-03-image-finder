export const ImageGalleryItem = ({webformatURL, largeImageURL}) => {
    return (
        <li className="gallery-item" >
  <img src={webformatURL} alt={largeImageURL} />
</li>
    )
}