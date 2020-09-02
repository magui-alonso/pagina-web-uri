export default () => (
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
                <input type="text" name="_honey" style={{ display: "none" }} />
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
              <div className="carousel-item py-5 active">
                <div className="row">
                  <div id="card-1" className="col-sm-4">
                    <div className="card">
                      <div className="card-body">
                        <a href="#">
                          <img
                            src="2.jpg"
                            width="250"
                            height="200"
                            alt="logo-osdepym"
                          />
                        </a>
                        <h4 className="card-body--titulo">
                          Alimentos: cómo garantizar su seguridad durante la
                          pandemia.
                        </h4>
                        <p className="card-body--texto">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Perspiciatis pariatur ratione fugit delectus
                          laboriosam eaque blanditiis assumenda, id aspernatur
                          nemo possimus dolor rerum. Eius quasi quia laborum
                          assumenda facere placeat...
                        </p>
                        <button
                          type="button"
                          id="boton-leer-mas"
                          className="btn btn-danger"
                          data-dismiss="modal"
                        >
                          Leer mas
                        </button>
                      </div>
                    </div>
                  </div>
                  <div id="card-2" className="col-sm-4">
                    <div className="card">
                      <div className="card-body">
                        <a href="#">
                          <img
                            src="3.jpg"
                            width="250"
                            height="200"
                            alt="logo-farmacia-del-puente"
                          />
                        </a>
                        <h4 className="card-body--titulo">
                          Salud mental de niños y adolescentes en pandemia.
                        </h4>
                        <p className="card-body--texto">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Perspiciatis pariatur ratione fugit delectus
                          laboriosam eaque blanditiis assumenda, id aspernatur
                          nemo possimus dolor rerum. Eius quasi quia laborum
                          assumenda facere placeat...
                        </p>
                        <button
                          type="button"
                          id="boton-leer-mas"
                          className="btn btn-danger"
                          data-dismiss="modal"
                        >
                          Leer mas
                        </button>
                      </div>
                    </div>
                  </div>
                  <div id="card-3" className="col-sm-4">
                    <div className="card">
                      <div className="card-body">
                        <a href="#">
                          <img
                            src="7.jpg"
                            width="250"
                            height="200"
                            alt="logo-farmacia-del-puente"
                          />
                        </a>
                        <h4 className="card-body--titulo">
                          ¿Cuál es el riesgo para los hipertensos?
                        </h4>
                        <p className="card-body--texto">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Perspiciatis pariatur ratione fugit delectus
                          laboriosam eaque blanditiis assumenda, id aspernatur
                          nemo possimus dolor rerum. Eius quasi quia laborum
                          assumenda facere placeat...
                        </p>
                        <button
                          type="button"
                          id="boton-leer-mas"
                          className="btn btn-danger"
                          data-dismiss="modal"
                        >
                          Leer mas
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item py-5">
                <div className="row">
                  <div id="card-1" className="col-sm-4">
                    <div className="card">
                      <div className="card-body">
                        <iframe
                          width="250"
                          height="200"
                          src="https://www.youtube.com/embed/_JDOGSkVMNY"
                          frameborder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                        <h4 className="card-body--titulo">
                          Cuerpo y mente saludable - Tips de Salud.
                        </h4>
                        <a href="https://www.youtube.com/embed/_JDOGSkVMNY">
                          <button
                            type="button"
                            id="boton-leer-mas"
                            className="btn btn-danger"
                            data-dismiss="modal"
                          >
                            Ver mas
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div id="card-2" className="col-sm-4">
                    <div className="card">
                      <div className="card-body">
                        <iframe
                          width="250"
                          height="200"
                          src="https://www.youtube.com/embed/KF4be_6uLLI"
                          frameborder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                        <h4 className="card-body--titulo">
                          Sanos en casa durante la pandemia de COVID-19
                        </h4>
                        <a href="https://www.youtube.com/embed/KF4be_6uLLI">
                          <button
                            type="button"
                            id="boton-leer-mas"
                            className="btn btn-danger"
                            data-dismiss="modal"
                          >
                            Ver mas
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div id="card-3" className="col-sm-4">
                    <div className="card">
                      <div className="card-body">
                        <iframe
                          width="250"
                          height="200"
                          src="https://www.youtube.com/embed/8cIhYlwNp8A"
                          frameborder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                        <h4 className="card-body--titulo">
                          Consejos para enfrentar el estrés ante la pandemia por
                          COVID-19
                        </h4>
                        <a href="https://www.youtube.com/embed/8cIhYlwNp8A">
                          <button
                            type="button"
                            id="boton-leer-mas"
                            className="btn btn-danger"
                            data-dismiss="modal"
                          >
                            Ver mas
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item py-5">
                <div className="row">
                  <div id="card-1" className="col-sm-4">
                    <div className="card">
                      <div className="card-body">
                        <a href="#">
                          <img
                            src="4.jpg"
                            width="250"
                            height="200"
                            alt="logo-osdepym"
                          />
                        </a>
                        <h4 className="card-body--titulo">
                          Verano caliente: temperaturas más altas que lo
                          habitual.
                        </h4>
                        <p className="card-body--texto">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Perspiciatis pariatur ratione fugit delectus
                          laboriosam eaque blanditiis assumenda, id aspernatur
                          nemo possimus dolor rerum. Eius quasi quia laborum
                          assumenda facere placeat...
                        </p>
                        <button
                          type="button"
                          id="boton-leer-mas"
                          className="btn btn-danger"
                          data-dismiss="modal"
                        >
                          Leer mas
                        </button>
                      </div>
                    </div>
                  </div>
                  <div id="card-2" className="col-sm-4">
                    <div className="card">
                      <div className="card-body">
                        <a href="#">
                          <img
                            src="6.jpg"
                            width="250"
                            height="200"
                            alt="logo-farmacia-del-puente"
                          />
                        </a>
                        <h4 className="card-body--titulo">
                          ¿Cansado de los ronquidos? 10 recomendaciones.
                        </h4>
                        <p className="card-body--texto">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Perspiciatis pariatur ratione fugit delectus
                          laboriosam eaque blanditiis assumenda, id aspernatur
                          nemo possimus dolor rerum. Eius quasi quia laborum
                          assumenda facere placeat...
                        </p>
                        <button
                          type="button"
                          id="boton-leer-mas"
                          className="btn btn-danger"
                          data-dismiss="modal"
                        >
                          Leer mas
                        </button>
                      </div>
                    </div>
                  </div>
                  <div id="card-3" className="col-sm-4">
                    <div className="card">
                      <div className="card-body">
                        <a href="#">
                          <img
                            src="5.jpg"
                            width="250"
                            height="200"
                            alt="logo-osdepym"
                          />
                        </a>
                        <h4 className="card-body--titulo">
                          Coronavirus: ¿Sirve el plasma de pacientes
                          recuperados?
                        </h4>
                        <p className="card-body--texto">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Perspiciatis pariatur ratione fugit delectus
                          laboriosam eaque blanditiis assumenda, id aspernatur
                          nemo possimus dolor rerum. Eius quasi quia laborum
                          assumenda facere placeat...
                        </p>
                        <button
                          type="button"
                          id="boton-leer-mas"
                          className="btn btn-danger"
                          data-dismiss="modal"
                        >
                          Leer mas
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ol className="carousel-indicators">
                <li
                  data-target="#myCarousel"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
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
          <p className="footer-content-info-texto--email">+54 9 2616 53-4910</p>
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
