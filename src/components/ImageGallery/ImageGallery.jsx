import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
export const ImageGallery = ({ array }) => {
    return (
        <ul className="gallery">
            {array.map(({ id, webformatURL }) => {                
                return <ImageGalleryItem key={id} webformatURL={webformatURL}/>
            })}
</ul>
    )
}