import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
export const ImageGallery = ({ array, onClick }) => {
    return (
        <ul className="gallery" onClick={onClick}>
            {array.map(({ id, webformatURL, largeImageURL }) => {                
                return <ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL}/>
            })}
</ul>
    )
}