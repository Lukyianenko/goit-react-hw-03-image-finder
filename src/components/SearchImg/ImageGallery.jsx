import css from './styles.module.css';
import { ImageGalleryItem } from './ImageGalleryItem'

export const ImageGallery = ({ images }) => {
    return(<ul className={css.ImageGallery}>
        <ImageGalleryItem images={images}/>
    </ul>
    )
}