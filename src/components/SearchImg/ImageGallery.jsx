import css from './styles.module.css';
import { Component } from "react";
import ImageGalleryItem from './ImageGalleryItem';
import { Modal } from './Modal';

export class ImageGallery extends Component {
    state = {
        id: null,
        isOpen: 'false',
    }

    onLoadId= id => {
        this.setState({
            id: id,
            isOpen: 'true',
        })
    }

    onClose = isClose => {
        console.log(typeof(isClose));
        this.setState({
            isOpen: isClose,
        })
    }

    render() {
        const { images, onLargeImage } = this.props;
        return(<ul className={css.ImageGallery}>
            <ImageGalleryItem images={images} onLargeImage={onLargeImage} loadId={this.onLoadId}/>
            {this.state.isOpen === 'true' && <Modal images={images} id={this.state.id} onClose={this.onClose}/>}
        </ul>
        )
    } 
}
