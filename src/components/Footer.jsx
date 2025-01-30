import { useEffect } from "react";

import S from "./styles/Footer.module.css"

import { FaWhatsapp, FaInstagram, FaGithub, FaArrowUp } from "react-icons/fa"

import logoByte from "../assets/byte.png"

export function Footer() {
    useEffect(() => {
        const links = document.querySelectorAll('a[href^="#"]');
    
        links.forEach((link) => {
          link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
    
            if (targetElement) {
              window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth",
              });
            }
          });
        });
      }, []);

    return (
        <footer className={S.footer} id="footer">
          <div class={S.part1}>
            <div className={S.container}>
                <div className={S.company}>
                    <img src={logoByte} />
                    <strong>Byte Company</strong>
                </div>
            </div>

            <div className={S.container}>
                <ul className={S.ul}>
                    <li className={S.li}><FaWhatsapp className={S.whatsappIcon} /></li>
                    <li className={S.li}><a href="#"><FaInstagram className={S.instagramIcon} /></a></li>
                    <li className={S.li}><a href="https://github.com/Erik3331/Byte-Company-LTDA"><FaGithub className={S.githubIcon} /></a></li>
                    <li className={S.li}><a href="#header"><FaArrowUp className={S.arrowUpIcon} /></a></li>
                </ul>
            </div>

          </div>

          <div className={S.part2}>
              <p>© 2025 Byte Company LTDA. All Rights Reserved.</p>
          </div>
        </footer>
    )
}