import { Nav } from "./Nav"

import S from "./styles/Header.module.css"

import logoByte from "../assets/byte.png"

export function Header() {
    return(
        <header className={S.header} id="header">
            <div className={S.enterpriseDiv}>
                <img src={logoByte} alt="Logotipo da Byte"/>
                <strong>Byte Company</strong>
            </div>

            <Nav />
            
        </header>
    )
}