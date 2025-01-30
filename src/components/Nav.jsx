import { useEffect } from "react";

import S from "./styles/Nav.module.css";

export function Nav() {
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
    <nav className={S.nav}>
      <ul className={S.ul}>
        <li className={S.li}>
          <a className={S.a} href="#projects">Projects</a>
        </li>
        <li className={S.li}>
          <a className={S.a} href="#about">About</a>
        </li>
        <li className={S.li}>
          <a className={S.a} href="#footer">Contacts</a>
        </li>
      </ul>
    </nav>
  );
}
