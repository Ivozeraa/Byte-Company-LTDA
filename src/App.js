import { Header } from "./components/Header";
import { Footer } from "./components/Footer"
import { Product } from "./components/Product";

import magicPen from "./assets/magicPen.png"

import { Button } from "./components/Button"

import Banner1 from "./assets/content1.jfif";
import Banner2 from "./assets/content3.jpg";

import S from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <main>
        <article
          className={S.content}
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.16)), url(${Banner1})`,
          }}
        >
          <strong>
            Innovation that turns ideas into solutions
          </strong>

          <p>
          At Byte Company, we focus on creating innovative hardware solutions that blend technology and functionality. Our goal is to transform ideas into efficient, affordable products that improve people's lives. By approaching challenges practically, we aim to deliver solutions that are both accessible and impactful, always exploring new possibilities for the future.          </p>

          <Button buttonContent="Learn More" targetClass="Footer"/>

        </article>

        <article className={S.content2} id="projects">
          <strong style={{fontSize: '2.25rem'}}>Projects</strong>
          <Product 
            imgProduct={magicPen}
            strongProduct="Magic Pen"
            pProduct="The Magic Pen is an innovative pen made from a repurposed mouse. Its ergonomic design maintains the mouse's original comfort, while the click activates the retractable tip. Ideal for those looking for creativity, sustainability and technology in a single product."/>
    
        </article>

        <article 
          className={S.content3} 
          id="about"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.16)), url(${Banner2})`,
          }}
        >
          <strong style={{fontSize: '2rem'}}>About Us</strong>
          
        </article>
      </main>

      <Footer className="Footer"/>
    </div>
  );
}
