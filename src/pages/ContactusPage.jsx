import React from "react";
import BreadCrum from "../components/BreadCrum";

const ContactusPage = () => {
  return (
    <>
      <BreadCrum title="Contact Us" />

      <div class="container-fluid contact py-5">
        <div class="container py-5">
          <div class="row g-5">
            <div class="col-xl-6">
              <div class="wow fadeInUp" data-wow-delay="0.2s">
                <div class="bg-light rounded p-5 mb-5">
                  <h4 class="text-primary mb-4">Get in Touch</h4>
                  <div class="row g-4">
                    <div class="col-md-6">
                      <div class="contact-add-item">
                        <div class="contact-icon text-primary mb-4">
                          <i class="fas fa-map-marker-alt fa-2x"></i>
                        </div>
                        <div>
                          <h4>Address</h4>
                          <p class="mb-0">123 Street New York.USA</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="contact-add-item">
                        <div class="contact-icon text-primary mb-4">
                          <i class="fas fa-envelope fa-2x"></i>
                        </div>
                        <div>
                          <h4>Mail Us</h4>
                          <p class="mb-0">info@example.com</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="contact-add-item">
                        <div class="contact-icon text-primary mb-4">
                          <i class="fa fa-phone-alt fa-2x"></i>
                        </div>
                        <div>
                          <h4>Telephone</h4>
                          <p class="mb-0">(+012) 3456 7890</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="contact-add-item">
                        <div class="contact-icon text-primary mb-4">
                          <i class="fab fa-firefox-browser fa-2x"></i>
                        </div>
                        <div>
                          <h4>Yoursite@ex.com</h4>
                          <p class="mb-0">(+012) 3456 7890</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="bg-light p-5 rounded h-100 wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <h4 class="text-primary">Send Your Message</h4>
                  <p class="mb-4">
                    The contact form is currently inactive. Get a functional and
                    working contact form with Ajax & PHP in a few minutes. Just
                    copy and paste the files, add a little code and you're done.{" "}
                    <a
                      class="text-primary fw-bold"
                      href="https://htmlcodex.com/contact-form"
                    >
                      Download Now
                    </a>
                    .
                  </p>
                  <form>
                    <div class="row g-4">
                      <div class="col-lg-12 col-xl-6">
                        <div class="form-floating">
                          <input
                            type="text"
                            class="form-control border-0"
                            id="name"
                            placeholder="Your Name"
                          />
                          <label for="name">Your Name</label>
                        </div>
                      </div>
                      <div class="col-lg-12 col-xl-6">
                        <div class="form-floating">
                          <input
                            type="email"
                            class="form-control border-0"
                            id="email"
                            placeholder="Your Email"
                          />
                          <label for="email">Your Email</label>
                        </div>
                      </div>
                      <div class="col-lg-12 col-xl-6">
                        <div class="form-floating">
                          <input
                            type="phone"
                            class="form-control border-0"
                            id="phone"
                            placeholder="Phone"
                          />
                          <label for="phone">Your Phone</label>
                        </div>
                      </div>
                      <div class="col-lg-12 col-xl-6">
                        <div class="form-floating">
                          <input
                            type="text"
                            class="form-control border-0"
                            id="project"
                            placeholder="Project"
                          />
                          <label for="project">Your Project</label>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-floating">
                          <input
                            type="text"
                            class="form-control border-0"
                            id="subject"
                            placeholder="Subject"
                          />
                          <label for="subject">Subject</label>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-floating">
                          <textarea
                            class="form-control border-0"
                            placeholder="Leave a message here"
                            id="message"
                            style={{ height: "160px" }}
                          ></textarea>
                          <label for="message">Message</label>
                        </div>
                      </div>
                      <div class="col-12">
                        <button class="btn btn-primary w-100 py-3">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-xl-6 wow fadeInRight" data-wow-delay="0.2s">
              <div class="rounded h-100">
                <iframe
                  className="w-100 h-100"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=laxman%20vihar%20phase%202&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactusPage;
