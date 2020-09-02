import { extractSliceData } from "../../src/utils";
import { Client } from "../../prismic";
import NextLink from "next/link";
import { RichText, Link } from "prismic-reactjs";
import { Footer } from "../../src/Footer";

const Page = ({ videos, hasNext, hasPrev, currentPage }) => {
  return (
    <div className="grid">
      <section class="section-videos">
        <h4 class="section-blog-titulo">Salud</h4>
        <h3 class="section-blog-titulo-2">Videos</h3>
        {videos.map(({ titulo, link }, idx) => (
          <div key={`${idx}`} class="card-body-videos">
            <iframe
              class="card-body-videos--video"
              width="250"
              height="140"
              src={Link.url(link)}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <h4 class="card-body-videos--titulo">{RichText.asText(titulo)}</h4>
            <a href={Link.url(link)}>
              <button
                type="button"
                id="boton-leer-mas"
                class="btn btn-danger"
                data-dismiss="modal"
              >
                Ir al video
              </button>
            </a>
          </div>
        ))}

        <nav aria-label="Page navigation example">
          <ul className="pagination">
            {hasPrev ? (
              <li className="page-item">
                <NextLink
                  href="/videos/[page]"
                  as={`/videos/${currentPage - 1}`}
                >
                  <a className="page-link" aria-label="Previous">
                    <span
                      id="pagination-icono"
                      className="iconify"
                      data-icon="foundation-arrow-left"
                      data-inline="false"
                    ></span>
                  </a>
                </NextLink>
              </li>
            ) : null}
            {hasNext ? (
              <li className="page-item">
                <NextLink
                  href="/videos/[page]"
                  as={`/videos/${currentPage + 1}`}
                >
                  <a className="page-link" aria-label="Next">
                    <span
                      id="pagination-icono"
                      className="iconify"
                      data-icon="foundation-arrow-right"
                      data-inline="false"
                    ></span>
                  </a>
                </NextLink>
              </li>
            ) : null}
          </ul>
        </nav>

        <div class="container text-center my-3">
          <div class="row mx-auto my-auto">
            <div
              id="myCarousel"
              class="carousel slide w-100"
              data-ride="carousel"
            >
              <div class="carousel-inner" role="listbox">
                <div class="carousel-item py-5 active">
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="card">
                        <div class="card-body">
                          <a href="http://www.osdepym.com.ar/PortalCMS/app.htm">
                            <img
                              src="multimedia/osdepym.png"
                              width="200"
                              height="70"
                              alt="logo-osdepym"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="card">
                        <div class="card-body">
                          <a href="https://farmaciadelpuente.com.ar/">
                            <img
                              src="multimedia/farmacia-del-puente.png"
                              width="200"
                              height="70"
                              alt="logo-farmacia-del-puente"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item py-5">
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="card">
                        <div class="card-body">
                          <a href="http://www.osdepym.com.ar/PortalCMS/app.htm">
                            <img
                              src="multimedia/osdepym.png"
                              width="200"
                              height="70"
                              alt="logo-osdepym"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="card">
                        <div class="card-body">
                          <a href="https://farmaciadelpuente.com.ar/">
                            <img
                              src="multimedia/farmacia-del-puente.png"
                              width="200"
                              height="70"
                              alt="logo-farmacia-del-puente"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item py-5">
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="card">
                        <div class="card-body">
                          <a href="http://www.osdepym.com.ar/PortalCMS/app.htm">
                            <img
                              src="multimedia/osdepym.png"
                              width="200"
                              height="70"
                              alt="logo-osdepym"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="card">
                        <div class="card-body">
                          <a href="https://farmaciadelpuente.com.ar/">
                            <img
                              src="multimedia/farmacia-del-puente.png"
                              width="200"
                              height="70"
                              alt="logo-farmacia-del-puente"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item py-5">
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="card">
                        <div class="card-body">
                          <a href="http://www.osdepym.com.ar/PortalCMS/app.htm">
                            <img
                              src="multimedia/osdepym.png"
                              width="200"
                              height="70"
                              alt="logo-osdepym"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="card">
                        <div class="card-body">
                          <a href="https://farmaciadelpuente.com.ar/">
                            <img
                              src="multimedia/farmacia-del-puente.png"
                              width="200"
                              height="70"
                              alt="logo-farmacia-del-puente"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ol class="carousel-indicators">
                  <li
                    data-target="#myCarousel"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li data-target="#myCarousel" data-slide-to="1"></li>
                  <li data-target="#myCarousel" data-slide-to="2"></li>
                  <li data-target="#myCarousel" data-slide-to="3"></li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export const getStaticPaths = async () => {
  const page = await Client().getSingle("videos");
  const { data } = page;
  const videos = Array(
    Math.ceil(extractSliceData(data, "videos").length / 3)
  ).fill(1);
  if (videos.length === 0) {
    videos.push(1);
  }
  return {
    paths: videos.map((_, idx) => ({ params: { page: `${idx}` } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params = {} }) => {
  const { page: pageOffset } = params;
  const page = await Client().getSingle("videos");
  const { data } = page;
  const currentPage = parseInt(pageOffset);
  const allVideos = extractSliceData(data, "videos");
  const videos = allVideos.slice(pageOffset, 3);
  const hasNext = !!allVideos[currentPage + 4];
  const hasPrev = pageOffset > 0;

  return {
    props: {
      currentPage,
      videos,
      hasNext,
      hasPrev,
    },
    revalidate: 30,
  };
};

export default Page;
