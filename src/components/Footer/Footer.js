import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__description">Учебный проект Яндекс.Практикум x BeatFilm.</h2>
      <div className="footer__box">
        <p className="footer__copyright">&#169; 2023</p>
        <div className="footer__links">
          <a className="footer__link" href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
          <a className="footer__link" href="https://github.com/NekitCudder" target="_blank" rel="noreferrer">Github</a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;