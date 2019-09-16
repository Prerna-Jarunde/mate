<template>
  <div class="mainHeader bg-secondary">
    <div class="container">
      <!-- Main Header -->

      <b-navbar toggleable="lg" type="dark" variant="secondary">
        <b-navbar-nav class="mate">
          <b-navbar-brand href="#">MATE</b-navbar-brand>
        </b-navbar-nav>
        <!-- Navigation options -->

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#">Home</b-nav-item>
            <b-nav-item href="#">Services</b-nav-item>
            <b-nav-item href="#">Features</b-nav-item>
            <b-nav-item href="#">Pricing</b-nav-item>
            <b-nav-item href="#">Team</b-nav-item>
            <b-nav-item href="#">Blog</b-nav-item>
            <b-nav-item href="#">Pricing</b-nav-item>
            <li class="nav-item active contact">
              <a class="nav-link mx-2" href="#">
                Contact
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <!-- <b-nav-item href="#">Contact</b-nav-item> -->
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>

      <!-- SubHeader Section Mate-Free Text -->
      <div class="mate-free mt-5 pt-5">
        <div class="font-weight-bolder text-white mate-free">Meta-Free Parallax Website Template</div>
      </div>
      <!-- SubHeader Section demo text -->
      <div class="demo text-white mt-3">Lorem dipsum dolor sit amet,consectutur adipsing elit.</div>
      <!-- Download Button -->
      <div class="mt-5 mb-5 bottom-section">
        <button type="button" class="btn btn-success download btn-lg px-5">Download</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.navbar-dark .navbar-brand {
  color: lightseagreen;
  font-size: 40px;
}
.navbar-dark .navbar-nav .nav-link {
  color: white;
}
.contact {
  border-radius: 20px;
  background-color: lightseagreen;
}
.mate-free {
  font-size: 50px;
}
.btn-success {
  margin: 50px;
  border-radius: 23px;
  border: none;
  background-color: lightseagreen;
  margin-top: -66px;
}
.download:hover {
  background-color: lightseagreen;
}
.bottom-section {
  padding: 50px;
}
@media (min-width: 320px) and (max-width: 480px) {
  .btn-success {
    margin: 18px;
  }
  .bottom-section {
    padding: 10px;
  }
  .mate-free {
    font-size: 35px;
  }
}
</style>
