import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
const ProductsSlider = () => {
  let sliderOptions = {
    slidesPerView: 3,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        module: [FreeMode, Pagination, Autoplay],
      },
      768: {
        slidesPerView: 2,
        module: [FreeMode, Pagination, Autoplay],
      },
      // 992: {
      //   slidesPerView: 3,
      // },
      1200: {
        slidesPerView: 3,
        module: [FreeMode, Pagination, Autoplay],
      },
    },
  };

  return (
    <>
      <div className="container-fluid blog pb-5">
        <div className="container pb-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ maxWidth: "800px" }}
          >
            <h4 className="text-primary">Our Blog & News</h4>
            <h1 className="display-5 mb-4">Articles For Pro Traders</h1>
            <p className="mb-0">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              adipisci facilis cupiditate recusandae aperiam temporibus corporis
              itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
              obcaecati, ipsam mollitia hic.
            </p>
          </div>
          <div className="blog-carousel wow fadeInUp" data-wow-delay="0.2s">
            <Swiper {...sliderOptions} className="mySwiper">
              <SwiperSlide>
                <div className="blog-item p-4">
                  <div className="blog-img mb-4">
                    <img
                      src="img/service-1.jpg"
                      className="img-fluid w-100 rounded"
                      alt=""
                    />{" "}
                    <div className="blog-title">
                      <a href="#" className="btn">
                        Dividend Stocks
                      </a>
                    </div>
                  </div>
                  <a href="#" className="h4 d-inline-block mb-3">
                    Options Trading Business?
                  </a>
                  <p className="mb-4">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore aut aliquam suscipit error corporis accusamus
                    labore....
                  </p>
                  <div className="d-flex align-items-center">
                    <img
                      src="img/testimonial-1.jpg"
                      className="img-fluid rounded-circle"
                      style={{ width: "60px", height: "60px" }}
                      alt=""
                    />
                    <div className="ms-3">
                      <h5>Admin</h5>
                      <p className="mb-0">October 9, 2025</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="blog-item p-4">
                  <div className="blog-img mb-4">
                    <img
                      src="img/service-2.jpg"
                      className="img-fluid w-100 rounded"
                      alt=""
                    />
                    <div className="blog-title">
                      <a href="#" className="btn">
                        Non-Dividend Stocks
                      </a>
                    </div>
                  </div>
                  <a href="#" className="h4 d-inline-block mb-3">
                    Options Trading Business?
                  </a>
                  <p className="mb-4">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore aut aliquam suscipit error corporis accusamus
                    labore....
                  </p>
                  <div className="d-flex align-items-center">
                    <img
                      src="img/testimonial-2.jpg"
                      className="img-fluid rounded-circle"
                      style={{ width: "60px", height: "60px" }}
                      alt=""
                    />
                    <div className="ms-3">
                      <h5>Admin</h5>
                      <p className="mb-0">October 9, 2025</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="blog-item p-4">
                  <div className="blog-img mb-4">
                    <img
                      src="img/service-3.jpg"
                      className="img-fluid w-100 rounded"
                      alt=""
                    />
                    <div className="blog-title">
                      <a href="#" className="btn">
                        Dividend Stocks
                      </a>
                    </div>
                  </div>
                  <a href="#" className="h4 d-inline-block mb-3">
                    Options Trading Business?
                  </a>
                  <p className="mb-4">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore aut aliquam suscipit error corporis accusamus
                    labore....
                  </p>
                  <div className="d-flex align-items-center">
                    <img
                      src="img/testimonial-3.jpg"
                      className="img-fluid rounded-circle"
                      style={{ width: "60px", height: "60px" }}
                      alt=""
                    />
                    <div className="ms-3">
                      <h5>Admin</h5>
                      <p className="mb-0">October 9, 2025</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="blog-item p-4">
                  <div className="blog-img mb-4">
                    <img
                      src="img/service-4.jpg"
                      className="img-fluid w-100 rounded"
                      alt=""
                    />
                    <div className="blog-title">
                      <a href="#" className="btn">
                        Non-Dividend Stocks
                      </a>
                    </div>
                  </div>
                  <a href="#" className="h4 d-inline-block mb-3">
                    Options Trading Business?
                  </a>
                  <p className="mb-4">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore aut aliquam suscipit error corporis accusamus
                    labore....
                  </p>
                  <div className="d-flex align-items-center">
                    <img
                      src="img/testimonial-1.jpg"
                      className="img-fluid rounded-circle"
                      style={{ width: "60px", height: "60px" }}
                      alt=""
                    />
                    <div className="ms-3">
                      <h5>Admin</h5>
                      <p className="mb-0">October 9, 2025</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsSlider;
