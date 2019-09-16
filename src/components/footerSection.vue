<template>
  <!-- Footer Section  -->
  <div class="footerSection bg-secondary pt-4">
    <div class="container">
      <div class="row">
        <div class="col-md-6 d-flex mb-3">
          <!-- Footer Options  -->

          <!-- HomePage  -->
          <div class="footer-options home mx-2">
            <div>Homepage</div>
          </div>

          <!-- Services  -->
          <div class="footer-options services mx-2">
            <div>Services</div>
          </div>

          <!-- About Us -->
          <div class="footer-options about-us mx-2">
            <div>About Us</div>
          </div>

          <!-- Contact  -->
          <div class="footer-options contact mx-2">
            <div>Contact</div>
          </div>
        </div>

        <!-- Footer CopyRighht Option  -->
        <div class="col-md-6">
          <div
            class="footer-options copyright"
          >All copyrights reserved © 2018- Design & Developed by UI Deck</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.footer-options {
  color: white;
}
@media (min-width: 320px) and (max-width: 480px) {
  .footer-options {
    font-size: 12px;
    padding-right: 7px;
  }
}
@media (min-width: 375px) and (max-width: 667px) {
  .footer-options {
    padding-right: 21px;
  }
}
</style>    