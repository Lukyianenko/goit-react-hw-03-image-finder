import css from './styles.module.css';

export const ImageGalleryItem = ({ images }) => {
    return (images.map(image => (
            <li className={css.ImageGalleryItem} key={image.id}>
        <img src={image.webformatURL} alt={image.tags} className={css.ImageGalleryItemImage}/>
        </li>
        )
    ))
}