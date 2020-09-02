const { Footer } = require("../src/Footer");

const Page = () => (
  <div className="grid">
    <section className="section-osdepym">
      <h4 className="section-osdepym-titulo">
        <img src="/osdepym.png" alt="logo-osdepym" width="200" height="50" />
      </h4>

      <h4 className="h4-form-osdepym">Solicita Asesor de Ventas</h4>
      <form
        form
        action="https://formsubmit.co/pedro@uridesarrollos.com.ar"
        method="POST"
        className="speaker-form content"
        className="containerForm-osdepym"
      >
        <input
          type="hidden"
          name="_next"
          value="http://urivida.com.ar/gracias"
        />
        <input
          type="hidden"
          name="_subject"
          value="Nuevo mensaje, desde UriVida!"
        />
        <input type="text" name="_honey" style={{ display: "none" }} />
        <input type="hidden" name="_captcha" value="false" />

        <div className="form-group">
          <div className="form-group-1">
            <label className="form-text" for="nombre">
              Nombre y Apellido
            </label>
            <input
              type="text"
              name="nombre y apellido"
              className="form-control"
              required
            />

            <label className="form-text" for="fecha de nacimiento">
              Fecha de nac.
            </label>
            <input
              type="text"
              name="fecha de nacimiento"
              className="form-control"
              required
            />

            <label className="form-text" for="domicilio">
              Domicilio
            </label>
            <input
              type="text"
              name="domicilio"
              className="form-control"
              required
            />

            <label className="form-text" for="provincia">
              Provincia
            </label>
            <input
              type="text"
              name="provincia"
              className="form-control"
              required
            />

            <label className="form-text" for="ciudad">
              Ciudad
            </label>
            <input
              type="text"
              name="ciudad"
              className="form-control"
              required
            />
          </div>
          <div className="form-group-2">
            <label className="form-text" for="prepaga">
              Prepaga Actual
            </label>
            <input
              type="text"
              name="prepaga"
              className="form-control"
              required
            />

            <label className="form-text" className="form-text" for="telefono">
              Teléfono
            </label>
            <input type="tel" name="phone" className="form-control" required />

            <label className="form-text" for="email">
              Email{" "}
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              required
            />

            <label className="form-text" for="exampleFormControlTextarea1">
              Deja tu consulta
            </label>
            <textarea
              className="form-control"
              name="message"
              rows="4"
              required
            ></textarea>
          </div>
        </div>
        <button className="form-boton" type="submit">
          Enviar
        </button>
      </form>

      <h2 className="h2-osdepym">Novedades Osdepym</h2>
      <h3 className="h3-osdepym">Visita nuestra Página.</h3>
      <span
        id="flecha-osdepym"
        className="iconify"
        data-icon="eva:arrow-ios-downward-fill"
        data-inline="false"
      ></span>
      <a
        className="imagen-osdepym-link"
        href="http://www.osdepym.com.ar/PortalCMS/app.htm"
      >
        <img src="/osdepym.png" width="200" height="50" alt="osdepym" />
      </a>

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
                            src="/2.jpg"
                            width="250"
                            height="200"
                            alt="logo-osdepym"
                          />
                        </a>
                        <h4 className="card-body--titulo">
                          Alimentos: cómo garantizar su seguridad durante la
                          pandemia.
                        </h4>

                        <button
                          type="button"
                          id="boton-leer-mas"
                          className="btn btn-danger"
                          data-dismiss="modal"
                        >
                          + Info
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div id="card-2" className="card">
                      <div className="card-body">
                        <a href="#">
                          <img
                            src="/3.jpg"
                            width="250"
                            height="200"
                            alt="logo-farmacia-del-puente"
                          />
                        </a>
                        <h4 className="card-body--titulo">
                          Salud mental de niños y adolescentes en pandemia.
                        </h4>

                        <button
                          type="button"
                          id="boton-leer-mas"
                          className="btn btn-danger"
                          data-dismiss="modal"
                        >
                          + Info
                        </button>
                      </div>
                    </div>
                  </div>
                  <div id="card-3" className="col-sm-4">
                    <div className="card">
                      <div className="card-body">
                        <a href="#">
                          <img
                            src="/7.jpg"
                            width="250"
                            height="200"
                            alt="logo-farmacia-del-puente"
                          />
                        </a>
                        <h4 className="card-body--titulo">
                          ¿Cuál es el riesgo para los hipertensos?
                        </h4>

                        <button
                          type="button"
                          id="boton-leer-mas"
                          className="btn btn-danger"
                          data-dismiss="modal"
                        >
                          + Info
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
                            + Info
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
                            + Info
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
                            + Info
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
                            src="/4.jpg"
                            width="250"
                            height="200"
                            alt="logo-osdepym"
                          />
                        </a>
                        <h4 className="card-body--titulo">
                          Verano caliente: temperaturas más altas que lo
                          habitual.
                        </h4>

                        <button
                          type="button"
                          id="boton-leer-mas"
                          className="btn btn-danger"
                          data-dismiss="modal"
                        >
                          + Info
                        </button>
                      </div>
                    </div>
                  </div>
                  <div id="card-2" className="col-sm-4">
                    <div className="card">
                      <div className="card-body">
                        <a href="#">
                          <img
                            src="/6.jpg"
                            width="250"
                            height="200"
                            alt="logo-farmacia-del-puente"
                          />
                        </a>
                        <h4 className="card-body--titulo">
                          ¿Cansado de los ronquidos? 10 recomendaciones.
                        </h4>

                        <button
                          type="button"
                          id="boton-leer-mas"
                          className="btn btn-danger"
                          data-dismiss="modal"
                        >
                          + Info
                        </button>
                      </div>
                    </div>
                  </div>
                  <div id="card-3" className="col-sm-4">
                    <div className="card">
                      <div className="card-body">
                        <a href="#">
                          <img
                            src="/5.jpg"
                            width="250"
                            height="200"
                            alt="logo-osdepym"
                          />
                        </a>
                        <h4 className="card-body--titulo">
                          Coronavirus: ¿Sirve el plasma de pacientes
                          recuperados?
                        </h4>

                        <button
                          type="button"
                          id="boton-leer-mas"
                          className="btn btn-danger"
                          data-dismiss="modal"
                        >
                          + Info
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
    <Footer />
  </div>
);

export default Page;
