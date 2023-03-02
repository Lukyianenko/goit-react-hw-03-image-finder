import css from './styles.module.css';

export const Button = ({ pageClick, disable }) => (
            <button tupe="button" disable={disable} onClick={() => pageClick()} className={css.Button}>Load more</button>
        )
