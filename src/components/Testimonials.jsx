import React from "react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

function Testimonials() {
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
      <div className="container-fluid testimonial pb-5">
        <div className="container pb-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ maxWidth: "800px" }}
          >
            <h4 className="text-primary">Testimonial</h4>
            <h1 className="display-5 mb-4">Our Clients Riviews</h1>
            <p className="mb-0">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              adipisci facilis cupiditate recusandae aperiam temporibus corporis
              itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
              obcaecati, ipsam mollitia hic.
            </p>
          </div>
          <div
            className="testimonial-carousel wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <Swiper {...sliderOptions} className="mySwiper">
              <SwiperSlide>
                <div className="testimonial-item">
                  <div className="testimonial-quote-left">
                    <i className="fas fa-quote-left fa-2x"></i>
                  </div>
                  <div className="testimonial-img">
                    <img
                      src="img/testimonial-1.jpg"
                      className="img-fluid"
                      alt="Image"
                    />
                  </div>
                  <div className="testimonial-text">
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis blanditiis excepturi quisquam temporibus
                      voluptatum reprehenderit culpa, quasi corrupti laborum
                      accusamus.
                    </p>
                  </div>
                  <div className="testimonial-title">
                    <div>
                      <h4 className="mb-0">Person Name</h4>
                      <p className="mb-0">Profession</p>
                    </div>
                    <div className="d-flex text-primary">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="testimonial-quote-right">
                    <i className="fas fa-quote-right fa-2x"></i>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial-item">
                  <div className="testimonial-quote-left">
                    <i className="fas fa-quote-left fa-2x"></i>
                  </div>
                  <div className="testimonial-img">
                    <img
                      src="img/testimonial-2.jpg"
                      className="img-fluid"
                      alt="Image"
                    />
                  </div>
                  <div className="testimonial-text">
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis blanditiis excepturi quisquam temporibus
                      voluptatum reprehenderit culpa, quasi corrupti laborum
                      accusamus.
                    </p>
                  </div>
                  <div className="testimonial-title">
                    <div>
                      <h4 className="mb-0">Person Name</h4>
                      <p className="mb-0">Profession</p>
                    </div>
                    <div className="d-flex text-primary">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="testimonial-quote-right">
                    <i className="fas fa-quote-right fa-2x"></i>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial-item">
                  <div className="testimonial-quote-left">
                    <i className="fas fa-quote-left fa-2x"></i>
                  </div>
                  <div className="testimonial-img">
                    <img
                      src="img/testimonial-3.jpg"
                      className="img-fluid"
                      alt="Image"
                    />
                  </div>
                  <div className="testimonial-text">
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis blanditiis excepturi quisquam temporibus
                      voluptatum reprehenderit culpa, quasi corrupti laborum
                      accusamus.
                    </p>
                  </div>
                  <div className="testimonial-title">
                    <div>
                      <h4 className="mb-0">Person Name</h4>
                      <p className="mb-0">Profession</p>
                    </div>
                    <div className="d-flex text-primary">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="testimonial-quote-right">
                    <i className="fas fa-quote-right fa-2x"></i>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial-item">
                  <div className="testimonial-quote-left">
                    <i className="fas fa-quote-left fa-2x"></i>
                  </div>
                  <div className="testimonial-img">
                    <img
                      src="img/testimonial-2.jpg"
                      className="img-fluid"
                      alt="Image"
                    />
                  </div>
                  <div className="testimonial-text">
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis blanditiis excepturi quisquam temporibus
                      voluptatum reprehenderit culpa, quasi corrupti laborum
                      accusamus.
                    </p>
                  </div>
                  <div className="testimonial-title">
                    <div>
                      <h4 className="mb-0">Person Name</h4>
                      <p className="mb-0">Profession</p>
                    </div>
                    <div className="d-flex text-primary">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="testimonial-quote-right">
                    <i className="fas fa-quote-right fa-2x"></i>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
