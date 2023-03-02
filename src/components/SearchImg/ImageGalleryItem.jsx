import css from './styles.module.css';
import { Component } from "react";


class ImageGalleryItem extends Component {
render() {
    const { images, loadId } = this.props;
   
    return (
        images.map(image => (
    <li className={css.ImageGalleryItem} key={image.id} onClick={() => loadId(image.id)}>
        <img src={image.webformatURL} alt={image.tags} className={css.ImageGalleryItemImage} />
    </li>
    )
))   
}
}

export default ImageGalleryItem;