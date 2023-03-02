import css from './styles.module.css';


export const Modal =({ images, id }) => {
    const image = images.filter(image => image.id === id);
    return (
        <div className={css.Overlay}>
        <div className={css.Modal}>
            <img src={image[0].largeImageURL} alt={image.tags} />
        </div>
    </div>
    )
    
}