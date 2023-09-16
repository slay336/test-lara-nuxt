<script setup lang="ts">
import HeaderSection from "~/components/HeaderSection";
import SliderSection from "~/components/SliderSection";
import ServiceSection from "~/components/ServiceSection";
import AboutSection from "~/components/AboutSection";

import { ICarouselItem, IServiceCarouselItem } from "~/stores/carousel/types";

const carouselItems: Ref<Array<ICarouselItem>> = ref([
  {
    id: 1,
    title: "We Provide\nWelding Services",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio omnis fugit, sed tempora praesentium commodi error, hic recusandae repudiandae neque ad molestias, atque veritatis labore quae eveniet autem in",
    button: {
      caption: "Contact Us",
      href: "#",
    }
  },
  {
    id: 2,
    title: "We Provide\nWelding Services",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio omnis fugit, sed tempora praesentium commodi error, hic recusandae repudiandae neque ad molestias, atque veritatis labore quae eveniet autem in",
    button: {
      caption: "Contact Us",
      href: "#",
    }
  },
  {
    id: 3,
    title: "We Provide\nWelding Services",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio omnis fugit, sed tempora praesentium commodi error, hic recusandae repudiandae neque ad molestias, atque veritatis labore quae eveniet autem in",
    button: {
      caption: "Contact Us",
      href: "#",
    }
  }
]);

const serviceCarouselItems: Ref<Array<IServiceCarouselItem>> = ref([
  {
    id: 1,
    image: "images/s1.png",
    title: "Home Welding",
    description: "when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
  },
  {
    id: 2,
    image: "images/s4.png",
    title: "Machine Welding",
    description: "when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
  },
  {
    id: 3,
    image: "images/s6.png",
    title: "Car Welding",
    description: "when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
  },
  {
    id: 4,
    image: "images/s1.png",
    title: "Home Welding",
    description: "when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
  },
  {
    id: 5,
    image: "images/s4.png",
    title: "Machine Welding",
    description: "when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
  },
  {
    id: 6,
    image: "images/s6.png",
    title: "Car Welding",
    description: "when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
  },
])

</script>

<template>
  <div>
    <div class="relative min-h-[100vh] flex flex-col before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full">
      <div class="absolute top-0 left-0 w-full h-full overflow-hidden -z-1 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-r before:from-black/90 before:to-black/70">
        <img
          class="w-auto h-auto min-w-full min-h-full"
          src="images/hero-bg.jpg"
          alt=""
        />
      </div>
      <!-- header section strats -->
      <HeaderSection />
      <!-- end header section -->
      <!-- slider section -->
      <SliderSection :items="carouselItems" />
      <!-- end slider section -->
    </div>
    
    <!-- service section -->
    <ServiceSection :items="serviceCarouselItems" />
    <!-- service section ends -->

    <!-- about section -->
    <AboutSection />
    <!-- about section ends -->

    <!-- team section -->

    <section class="team_section layout_padding">
      <div class="container">
        <div class="heading_container heading_center">
          <h2>
            Our Team
          </h2>
          <p>
            Lorem ipsum dolor sit amet, non odio tincidunt ut ante, lorem a euismod suspendisse vel, sed quam nulla mauris
            iaculis. Erat eget vitae malesuada, tortor tincidunt porta lorem lectus.
          </p>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-6 mx-auto">
            <div class="box">
              <div class="img-box">
                <img src="images/t1.jpg" alt="">
              </div>
              <div class="detail-box">
                <h5>
                  Martin Anderson
                </h5>
                <h6 class="">
                  supervisor
                </h6>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 mx-auto">
            <div class="box">
              <div class="img-box">
                <img src="images/t2.jpg" alt="">
              </div>
              <div class="detail-box">
                <h5>
                  Denny Butler
                </h5>
                <h6 class="">
                  supervisor
                </h6>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 mx-auto">
            <div class="box">
              <div class="img-box">
                <img src="images/t3.jpg" alt="">
              </div>
              <div class="detail-box">
                <h5>
                  Nathan Mcpherson
                </h5>
                <h6 class="">
                  supervisor
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- end team section -->

    <!-- contact section -->
    <section class="contact_section ">
      <div class="container-fluid">

        <div class="row">
          <div class="col-md-6 px-0">
            <div class="img-box ">
              <img src="images/contact-img.jpg" class="box_img" alt="about img">
            </div>
          </div>
          <div class="col-md-5 mx-auto">
            <div class="form_container">
              <div class="heading_container heading_center">
                <h2>Get In Touch</h2>
              </div>
              <form action="">
                <div class="form-row">
                  <div class="form-group col">
                    <input type="text" class="form-control" placeholder="Your Name" />
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-lg-6">
                    <input type="text" class="form-control" placeholder="Phone Number" />
                  </div>
                  <div class="form-group col-lg-6">
                    <select name="" id="" class="form-control wide">
                      <option value="">Select Service</option>
                      <option value="">Service 1</option>
                      <option value="">Service 2</option>
                      <option value="">Service 3</option>
                    </select>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col">
                    <input type="email" class="form-control" placeholder="Email" />
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col">
                    <input type="text" class="message-box form-control" placeholder="Message" />
                  </div>
                </div>
                <div class="btn_box">
                  <button>
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end contact section -->

    <!-- client section -->

    <section class="client_section layout_padding">
      <div class="container ">
        <div class="heading_container heading_center">
          <h2>
            Testimonial
          </h2>
          <hr>
        </div>
        <div id="carouselExample2Controls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row">
                <div class="col-lg-7 col-md-9 mx-auto">
                  <div class="client_container ">
                    <div class="img-box">
                      <img src="images/client.jpg" alt="">
                    </div>
                    <div class="detail-box">
                      <h5>
                        Jone Mark
                      </h5>
                      <p>
                        Editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
                      </p>
                      <span>
                        <!-- <font-awesome-icon icon="fa fa-quote-left" /> -->
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row">
                <div class="col-lg-7 col-md-9 mx-auto">
                  <div class="client_container ">
                    <div class="img-box">
                      <img src="images/client.jpg" alt="">
                    </div>
                    <div class="detail-box">
                      <h5>
                        Jone Mark
                      </h5>
                      <p>
                        Editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
                      </p>
                      <span>
                        <!-- <font-awesome-icon icon="fa fa-quote-left" /> -->
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row">
                <div class="col-lg-7 col-md-9 mx-auto">
                  <div class="client_container ">
                    <div class="img-box">
                      <img src="images/client.jpg" alt="">
                    </div>
                    <div class="detail-box">
                      <h5>
                        Jone Mark
                      </h5>
                      <p>
                        Editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
                      </p>
                      <span>
                        <!-- <font-awesome-icon icon="fa fa-quote-left" /> -->
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel_btn-box">
            <a class="carousel-control-prev" href="#carouselExample2Controls" role="button" data-slide="prev">
              <span>
                <!-- <font-awesome-icon icon="fa fa-arrow-left" /> -->
              </span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExample2Controls" role="button" data-slide="next">
              <span>
                <!-- <font-awesome-icon icon="fa fa-arrow-right" /> -->
              </span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- end client section -->

    <!-- info section -->
    <section class="info_section ">
      <div class="container">
        <div class="info_top">
          <div class="row">
            <div class="col-md-3 ">
              <a class="navbar-brand" href="index.html">
                Finter
              </a>
            </div>
            <div class="col-md-5 ">
              <div class="info_contact">
                <a href="">
                  <!-- <font-awesome-icon icon="fa fa-map-marker" /> -->
                  <span>
                    Location
                  </span>
                </a>
                <a href="">
                  <!-- <font-awesome-icon icon="fa fa-phone" /> -->
                  <span>
                    +01 1234567890
                  </span>
                </a>
              </div>
            </div>
            <div class="col-md-4 ">
              <div class="social_box">
                <a href="">
                  <!-- <font-awesome-icon icon="fa-brands fa-facebook" /> -->
                </a>
                <a href="">
                  <!-- <font-awesome-icon icon="fa-brands fa-twitter" /> -->
                </a>
                <a href="">
                  <!-- <font-awesome-icon icon="fa-brands fa-linkedin" /> -->
                </a>
                <a href="">
                  <!-- <font-awesome-icon icon="fa-brands fa-instagram" /> -->
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="info_bottom">
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="info_detail">
                <h5>
                  Company
                </h5>
                <p>
                  Randomised words which don't look even slightly believable. If you are going to use a passage of
                  Lorem
                  Ipsum, you need to be sure
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="info_form">
                <h5>
                  NEWSLETTER
                </h5>
                <form action="">
                  <input type="text" placeholder="Enter Your Email" />
                  <button type="submit">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="info_detail">
                <h5>
                  Services
                </h5>
                <p>
                  Randomised words which don't look even slightly believable. If you are going to use a passage of
                  Lorem
                  Ipsum, you need to be sure
                </p>
              </div>
            </div>
            <div class="col-lg-2 col-md-6">
              <div class="">
                <h5>
                  Useful links
                </h5>
                <ul class="info_menu">
                  <li>
                    <a href="index.html">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="about.html">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="service.html">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="team.html">
                      Team
                    </a>
                  </li>
                  <li class="mb-0">
                    <a href="contact.html">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- end info_section -->

    <!-- footer section -->
    <footer class="footer_section">
      <div class="container">
        <p>
          &copy; <span id="displayYear"></span> All Rights Reserved By
          <a href="https://html.design/">Free Html Templates</a>
        </p>
      </div>
    </footer>
  </div>
</template>