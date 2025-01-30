import S from "./styles/Product.module.css";
import { Button } from "./Button";

export function Product({ imgProduct, strongProduct, pProduct, buttonContent }) {
    return (
        <div className={S.project}>
            <img src={imgProduct} alt={strongProduct}className={S.img}/>
            <div className={S.description}>
                <strong>{strongProduct}</strong>
                <p>{pProduct}</p>
                <Button 
                    buttonContent="See Project"
                    style={{ margin: '3rem' }}    
                /> 

            </div>
        </div>
    );
}
