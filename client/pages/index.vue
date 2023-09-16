<script setup lang="ts">
import HeroArea from "~/components/HeroArea";
import ServiceSection from "~/components/ServiceSection";
import AboutSection from "~/components/AboutSection";
import TeamSection from "~/components/TeamSection";
import ContactSection from "~/components/ContactSection";
import ClientSection from "~/components/ClientSection";

</script>

<template>
  <div>
    <!-- hero area -->
    <HeroArea />
    <!-- hero area ends -->
    
    <!-- service section -->
    <ServiceSection />
    <!-- service section ends -->

    <!-- about section -->
    <AboutSection />
    <!-- about section ends -->

    <!-- team section -->
    <TeamSection />
    <!-- end team section -->

    <!-- contact section -->
    <ContactSection />
    <!-- end contact section -->

    <!-- client section -->
    <ClientSection />
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