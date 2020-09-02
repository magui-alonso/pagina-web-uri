import { RichText, Link } from "prismic-reactjs";
import { Client } from "../prismic";
import { extractSliceData } from "../src/utils";

const Index = ({ page }) => {
  const { data } = page;
  const publicidad = extractSliceData(data, "publicidad");
  const publicidadSections = Array(publicidad.length / 3).fill(1);

  return (
    <div className="grid">
      <section>
        <h1 className="h1-index">
          <strong>U</strong>ri<strong>V</strong>ida
        </h1>
        <hr className="h1-borde"></hr>
        <h5 className="h5-index">Sigamos en contacto</h5>
        <button
          type="button"
          id="boton-subscribirse"
          data-toggle="modal"
          data-target="#myModal"
        >
          Subscribirse
        </button>
        <div className="modal" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Subscribirse</h5>
              </div>

              <div className="modal-body">
                <form
                  form
                  action="https://formsubmit.co/magui.alonso.g@gmail.com"
                  method="POST"
                  className="speaker-form content"
                  className="containerForm"
                >
                  <input
                    type="hidden"
                    name="_next"
                    value="http://127.0.0.1:5501/gracias.html"
                  />
                  <input
                    type="hidden"
                    name="_subject"
                    value="Nuevo mensaje, desde UriVida!"
                  />
                  <input
                    type="text"
                    name="_honey"
                    style={{ display: "none" }}
                  />
                  <input type="hidden" name="_captcha" value="false" />
                  <ul className="form">
                    <li>
                      <label for="nombre">Nombre y Apellido:</label>
                    </li>
                    <li>
                      <input type="text" name="name" required />
                    </li>
                    <li>
                      <label for="fecha de nacimiento">
                        Fecha de nacimiento:
                      </label>
                    </li>
                    <li>
                      <input type="text" name="fecha de nacimiento" required />
                    </li>
                    <li>
                      <label for="domicilio">Domicilio:</label>
                    </li>
                    <li>
                      <input type="text" name="domicilio" required />
                    </li>
                    <li>
                      <label for="actividad">Actividad:</label>
                    </li>
                    <li>
                      <input type="text" name="actividad" required />
                    </li>
                    <li>
                      <label for="email">Email:</label>
                    </li>
                    <li>
                      <input type="email" name="email" required />
                    </li>
                    <li>
                      <label for="tel">WhatsApp:</label>
                    </li>
                    <li>
                      <input type="tel" name="phone" required />
                    </li>
                    <li>
                      <input
                        className="botonEnviar"
                        type="submit"
                        value="Enviar"
                      />
                    </li>
                  </ul>
                </form>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  id="boton-close-modal"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>

        <h2 className="h2-index">Novedades</h2>

        <div className="container text-center my-3">
          <div className="row mx-auto my-auto">
            <div
              id="myCarousel"
              className="carousel slide w-100"
              data-ride="carousel"
            >
              <div className="carousel-inner" role="listbox">
                {publicidadSections.map((_, offset) => {
                  return (
                    <div
                      key={`${offset}`}
                      className={`carousel-item py-5 ${
                        offset === 0 ? "active" : ""
                      }`}
                    >
                      <div className="row">
                        {publicidad
                          .slice(offset * 3, offset * 3 + 3)
                          .map(({ imagen, titulo, descripcion, link }, idx) => {
                            let cardId = undefined;
                            if (idx === 0) {
                              cardId = "card-1";
                            } else if (idx === 1) {
                              cardId = "card-2";
                            } else if (idx === 2) {
                              cardId = "card-3";
                            }
                            const card = (
                              <div
                                key={`${offset}-${idx}`}
                                id={cardId}
                                className="col-sm-4"
                              >
                                <div className="card">
                                  <div className="card-body">
                                    <a href="#">
                                      <img
                                        src={imagen.url}
                                        width="250"
                                        height="200"
                                      />
                                    </a>
                                    <h4 className="card-body--titulo">
                                      {RichText.asText(titulo)}
                                    </h4>
                                    <p className="card-body--texto">
                                      {RichText.asText(descripcion)}
                                    </p>
                                    {Link.url(link) ? (
                                      <a href={Link.url(link)} target="_blank">
                                        <button
                                          type="button"
                                          id="boton-leer-mas"
                                          className="btn btn-danger"
                                          data-dismiss="modal"
                                        >
                                          Leer mas
                                        </button>
                                      </a>
                                    ) : null}
                                  </div>
                                </div>
                              </div>
                            );
                            return card;
                          })}
                      </div>
                    </div>
                  );
                })}

                <ol className="carousel-indicators">
                  {publicidadSections.map((_, idx) => (
                    <li
                      key={`${idx}`}
                      data-target="#myCarousel"
                      data-slide-to={`${idx}`}
                      className={idx === 0 ? "active" : ""}
                    ></li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer-content">
        <div className="footer-content-info">
          <a id="footer-content-info--logo" href="index.html">
            <strong>U</strong>ri<strong>V</strong>ida
          </a>
          <h5 className="footer-content-info--contacto">
            Contacto<a name="contacto" id="contacto"></a>
          </h5>
          <div className="footer-content-info-texto">
            <p className="footer-content-info-texto--tel">urivida@gmail.com</p>
            <p className="footer-content-info-texto--email">
              +54 9 2616 53-4910
            </p>
            <a href="https://www.facebook.com/UriVida-107667067719867">
              <span
                id="footer-content-info-texto--redes"
                className="iconify"
                data-icon="bx-bxl-facebook-square"
                data-inline="false"
              ></span>
            </a>
            <a href="https://www.instagram.com/uri.vida/?igshid=1unwqzfkcj9ra">
              <span
                id="footer-content-info-texto--redes"
                className="iconify"
                data-icon="carbon-logo-instagram"
                data-inline="false"
              ></span>
            </a>
          </div>
        </div>
        <div>
          <a href="http://www.osdepym.com.ar/PortalCMS/app.htm">
            <img
              className="icono-osdepym"
              src="osdepym.png"
              alt=""
              width="50"
              height="50"
            />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;

export const getStaticProps = async () => {
  const page = await Client().getSingle("home_page");
  return {
    props: {
      page,
    },
    revalidate: 30,
  };
};
