<template>
  <!-- Watch Our Intro Video Section  -->
  <div class="intro-video mt-5 pt-5 bg-info">
    <div class="container">
      <!-- Watch Our Intro Video Heading  -->
      <div class="justify-content center font-weight-bolder watch text-white">WATCH OUR INTRO VIDEO</div>
      <!-- Dummy Text Under Watch Our Intro Video Section  -->
      <div class="intro-video text text-white.">
        <div class="mt-3 text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
        <div class="text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>

        <!-- Font Awesome Icon Of Play Circle  -->
        <div class="play-circle mt-4 text-white">
          <font-awesome-icon :icon="['far', 'play-circle']" class="fa-5x" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.bg-info {
  padding: 50px;
  .intro-video {
    padding: 1px;
  }
  .watch {
    font-size: 30px;
  }
}
</style>
