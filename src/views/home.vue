<template>
  <div classs="home">
    <headerSection />
    <ourServices />
    <someFeatures />
    <ourPortfolio />
    <introVideo />
    <pricingTable />
    <status />
    <ourTeam />
    <ceoInfo />
    <recentBlog />
    <contact />
    <footerSection />
  </div>
</template>
<script>
import headerSection from "@/components/headerSection.vue";
import ourServices from "@/components/ourServices.vue";
import someFeatures from "@/components/someFeatures.vue";
import ourPortfolio from "@/components/ourPortfolio.vue";
import introVideo from "@/components/introVideo.vue";
import pricingTable from "@/components/pricingTable.vue";
import status from "@/components/status.vue";
import ourTeam from "@/components/ourTeam.vue";
import ceoInfo from "@/components/ceoInfo.vue";
import recentBlog from "@/components/recentBlog.vue";
import contact from "@/components/contact.vue";
import footerSection from "@/components/footerSection.vue";

export default {
  name: "home",
  components: {
    headerSection,
    ourServices,
    someFeatures,
    ourPortfolio,
    introVideo,
    pricingTable,
    status,
    ourTeam,
    ceoInfo,
    recentBlog,
    contact,
    footerSection
  }
};
</script>
<style lang="scss" scoped></style>
