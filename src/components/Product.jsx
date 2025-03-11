import S from "./styles/Product.module.css";

export function Product({ imgProduct, strongProduct, pProduct, url }) {
    return (
        <div className={S.project}>
            <img src={imgProduct} alt={strongProduct} className={S.img} />
            <div className={S.description}>
                <strong>{strongProduct}</strong>
                <p>{pProduct}</p>
                <a href={url} target="_blank" rel="noopener noreferrer" className={S.button}>
                    See more
                </a>
            </div>
        </div>
    );
}