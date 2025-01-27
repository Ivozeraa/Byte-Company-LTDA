import { Header } from "./components/Header";
import { Footer } from "./components/Footer"

import { Button } from "./components/Button"

import Banner1 from "./assets/content1.jfif";

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
          <strong className={S.titleContent}>
            Innovation that turns ideas into solutions
          </strong>

          <p className={S.pContent}>
          At Byte Company, we focus on creating innovative hardware solutions that blend technology and functionality. Our goal is to transform ideas into efficient, affordable products that improve people's lives. By approaching challenges practically, we aim to deliver solutions that are both accessible and impactful, always exploring new possibilities for the future.          </p>

          <Button buttonContent="Learn More" targetClass="Footer"/>

        </article>
      </main>

      <Footer className="Footer"/>
    </div>
  );
}
