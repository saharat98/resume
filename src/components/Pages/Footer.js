import "./Style/Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="icon-detail">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-github fa-6x" style={{ color: "#000000" }}></i>
          </a>
          <p
            style={{
              alignSelf: "center",
              fontSize: "1.4rem",
              marginLeft: 10,
            }}
          >
            https://github.com/saharat98
          </p>
          <div className="icon-detail">
            <a
              href="mailto:saharatpwork@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fas fa-envelope fa-6x" style={{ color: "#000000" }}></i>
            </a>

            <p
              style={{
                alignSelf: "center",
                fontSize: "1.4rem",
                marginLeft: 10,
              }}
            >
              saharatpwork@gmail.com
            </p>
          </div>
          <div className="icon-detail">
            <i class="fas fa-mobile-alt fa-6x" style={{ color: "#000000" }}></i>
            <p
              style={{
                alignSelf: "center",
                fontSize: "1.4rem",
                marginLeft: 10,
              }}
            >
              093-1301375
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
