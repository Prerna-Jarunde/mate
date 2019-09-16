<template>
  <div class="few-features bg-secondary">
    <div class="container">
      <div class="features pt-5">
        <!-- Some Features Heading -->
        <div
          class="somefeatures justify-content center text-uppercase font-weight-bolder text-white"
        >Some Features</div>
      </div>
      <!-- Dummy Text Under Some Features Heading  -->
      <div class="text-white dummy">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
        Lorem Ipsum is simply dummy text
      </div>

      <!-- List Of Features  -->
      <div class="row mt-5">
        <div class="col-md-4">
          <!-- First And Second Feature Section  -->
          <div class="d-flex">
            <!-- Font Awesome Icon For Rocket  -->
            <div class="rocket">
              <font-awesome-icon :icon="['fas', 'rocket']" class="fa-1x circle-icon" />
            </div>

            <!-- Bootstrap 4 Based Feature Section -->
            <div class="bootstrap4-based pt-3 pb-3">
              <!-- Bootstrap 4 Based Heading  -->
              <div class="font-weight-bold demo">BOOTSTRAP 4 BASED</div>
              <!-- Dummy Text Under Bootstrap 4 Based Feature Section  -->
              <div class="text-white dummy-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
            </div>
          </div>

          <!-- Second Feature Parallax Background  -->
          <div class="d-flex">
            <!-- Font Awesome Icon For Box  -->
            <div class="box">
              <font-awesome-icon :icon="['fas', 'box']" class="fa-1x circle-icon" />
            </div>
            <!-- Parallax Background Feature Section  -->
            <div class="parallax-background pt-3 pb-3">
              <!-- Parallax Background Heading  -->
              <div class="font-weight-bold demo">PARALLAX BACKGROUND</div>
              <!-- Dummy Text Under Parallax Background Feature Section  -->
              <div class="text-white dummy-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
            </div>
          </div>
        </div>

        <!-- Third And Fourth Feature Section -->
        <div class="col-md-4">
          <!-- Fully Responsive Feature Section  -->
          <div class="d-flex">
            <!-- Font Awesome Icon For Laptop  -->
            <div class="laptop">
              <font-awesome-icon :icon="['fas', 'laptop']" class="fa-1x circle-icon" />
            </div>
            <!-- Fully Responsive Feature Section  -->
            <div class="fully-responsive pt-3 pb-3">
              <!-- Fully Responsive Heading-->
              <div class="font-weight-bold demo">FULLY RESPONSIVE</div>
              <!-- Dummy Text Under Fully Responsive Feature Section  -->
              <div class="text-white dummy-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
            </div>
          </div>

          <!-- Fourth Feature Of Easy To Customize Section  -->
          <div class="d-flex">
            <!-- Font Awesome Icon For Cog  -->
            <div class="cog">
              <font-awesome-icon :icon="['fas', 'cog']" class="fa-1x circle-icon" />
            </div>
            <!-- Easy To Customize Section  -->
            <div class="easy-to-customize pt-3 pb-3">
              <!-- Easy To Customize Heading  -->
              <div class="font-weight-bold demo">EASY TO CUSTOMIZE</div>
              <!-- Dummy Text Under Easy To Customize Feature Section   -->
              <div class="text-white dummy-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
            </div>
          </div>
        </div>

        <!-- Image Section  -->
        <div class="col-md-4">
          <div class="photo-image">
            <img src="../assets/images/images.jpeg" alt="image" />
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
.somefeatures {
  font-size: 40px;
}

.features::after {
  content: "";
  border-bottom-style: solid;
  border-bottom-width: medium;
  border-bottom-color: lightseagreen;
  display: inline-block;
  width: 5%;
  // margin: 0 10% 0 10%;
}

.demo {
  color: lightseagreen;
  font-size: 20px;
}

.circle-icon {
  border: solid lightseagreen;
  width: 63px;
  height: 68px;
  border-radius: 38px;
  text-align: center;
  line-height: 103px;
  vertical-align: middle;
  padding: 13px;
  margin-top: 15px;

  color: lightseagreen;
}

@media (min-width: 320px) and (max-width: 480px) {
  .features::after {
    content: "";
    width: 15%;
  }
  .somefeatures {
    font-size: 30px;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .photo-image {
    margin-top: 83px;
    margin-left: 51px;
  }
}
</style>
