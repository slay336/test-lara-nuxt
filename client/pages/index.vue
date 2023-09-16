<script setup lang="ts">
import HeroArea from "~/components/HeroArea";
import ServiceSection from "~/components/ServiceSection";
import AboutSection from "~/components/AboutSection";
import TeamSection from "~/components/TeamSection";
import ContactSection from "~/components/ContactSection";
import ClientSection from "~/components/ClientSection";
import InfoSection from "~/components/InfoSection";
import FooterSection from "~/components/FooterSection";

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
    <InfoSection />
    <!-- end info_section -->

    <!-- footer section -->
    <FooterSection />
    <!-- end footer section -->
  </div>
</template>