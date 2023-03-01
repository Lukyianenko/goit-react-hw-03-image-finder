import css from './styles.module.css';

export const Button = ({ pageClick }) => (
            <button tupe="button" onClick={() => pageClick()} className={css.Button}>Load more</button>
        )
