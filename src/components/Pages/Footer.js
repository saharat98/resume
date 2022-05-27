import "./Style/Footer.css";

function Footer() {
  return (
    <>
      <div className="footer" id="contect">
        <div className="respon-contect">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i classNam="fab fa-github fa-3x" style={{ color: "#000000" }}></i>
          </a>
          <p
            style={{
              alignSelf: "center",
              fontSize: "1rem",
              marginLeft: 10,
              display: "flex",
            }}
          >
            https://github.com/saharat98
          </p>
          <a
            href="mailto:saharatpwork@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-envelope fa-3x" style={{ color: "#000000" }}></i>
          </a>

          <p
            style={{
              alignSelf: "center",
              fontSize: "1rem",
              marginLeft: 10,
              display: "flex",
            }}
          >
            saharatpwork@gmail.com
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
