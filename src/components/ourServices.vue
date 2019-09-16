<template>
  <div class="container">
    <!-- Our Services Heading -->
    <div class="ourServices justify-content center">
      <div class="font-weight-bolder mt-3">OUR SERVICES</div>
    </div>

    <!-- Dummy Text Under Our Services -->
    <div class="ourservices-text">
      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </div>
      <div>Lorem Ipsum is simply dummy text industry.</div>
    </div>

    <!-- Content Writing,Web Development and Business Consultancy Sections -->
    <div class="row mt-3">
      <div class="col-md-4">
        <!-- Content Writing Section -->
        <div class="content-writing pt-5 mb-5">
          <!-- Font Awesome Icon For Pencil-Alt -->
          <div class="pencil-alt mt-5">
            <font-awesome-icon :icon="['fas', 'pencil-alt']" class="fa-1x circle-icon" />
          </div>
          <!-- Content Writing Heading -->
          <div class="font-weight-bold content-writing">Content Writing</div>
          <!-- Dummy Text Under Content Writing -->
          <div class="content-writing-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
        </div>
      </div>
      <!-- Web Development Section  -->
      <div class="col-md-4">
        <div class="web-development pt-5 mb-5">
          <!-- Font Awesome Icon For Arrows-Alt -->
          <div class="arrows-alt-h mt-5">
            <font-awesome-icon :icon="['fas', 'arrows-alt-h']" class="fa-1x circle-icon" />
          </div>
          <!--  Web Development Heading -->
          <div class="font-weight-bold web-development">Web Development</div>
          <!-- Dummy Text Under Web Development-->
          <div class="web-development-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
        </div>
      </div>
      <!-- Business Consultancy Section  -->
      <div class="col-md-4">
        <div class="business-consultancy pt-5 mb-5">
          <!-- Font Awesome Icon For Smile-->
          <div class="smile mt-5">
            <font-awesome-icon :icon="['far', 'smile']" class="fa-1x circle-icon" />
          </div>
          <!--  Business Consultancy Heading -->
          <div class="font-weight-bold business-consultancy">Business Consultancy</div>
          <!-- Dummy Text Under Business Consultancy-->
          <div class="business-consultancy-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.ourServices {
  font-size: 40px;
}

.ourServices::after {
  content: "";
  border-bottom-style: solid;
  border-bottom-width: medium;
  border-bottom-color: lightseagreen;
  display: inline-block;
  width: 5%;
  align-content: center;
}

.font-weight-bold {
  font-size: 20px;
}
.circle-icon {
  border: solid whitesmoke;
  width: 63px;
  height: 68px;
  border-radius: 66%;
  text-align: center;
  line-height: 103px;
  vertical-align: middle;
  padding: 13px;
  margin-top: -91px;
  margin-left: -33px;
  color: lightseagreen;
}
@media (min-width: 320px) and (max-width: 480px) {
  .ourServices::after {
    content: "";
    width: 15%;
  }
  .ourServices {
    font-size: 30px;
  }
}
</style>
