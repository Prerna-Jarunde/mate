<template>
  <div class="container">
    <!-- Our PortFolio Section  -->
    <div class="ourportfolio mt-4">
      <!-- Our PortFolio Heading  -->
      <div class="justify-content center font-weight-bolder portfolio">OUR PORTFOLIO</div>
    </div>
    <!-- Dummy Text Under Our PortFolio Section  -->
    <div class="ourportfolio-text mt-2">
      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry Lorem Ipsum is simply dummy text.
      </div>
      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </div>
    </div>

    <!-- Buttons Under Our PortFolio Section  -->
    <div class="my-4 mt-5 option-button">
      <!-- Button 1- All  -->
      <button
        type="button"
        class="btn btn-outline-success ourportfolio-options btn-md mx-1 px-5"
      >All</button>

      <!-- Button 2- Design  -->
      <button type="button" class="btn btn-success btn-md ourportfolio-options mx-1 px-5">Design</button>

      <!-- Button 3- Development  -->
      <button
        type="button"
        class="btn btn-success btn-md ourportfolio-options mx-1 px-5"
      >Development</button>

      <!-- Button 4- Print  -->
      <button type="button" class="btn btn-success btn-md ourportfolio-options px-5">Print</button>
    </div>

    <!-- Images Section In Our PortFolio  -->
    <div class="row">
      <div class="col-md-4 px-2" v-for="item in items" v-bind:key="item.index">
        <div class="ourportfolio-photos">
          <div class="mb-3">
            <img :src="item.img" alt="photos" class="card-img-top abc" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import image1 from "../assets/images/10.jpg";
import image2 from "../assets/images/11.jpg";
import image3 from "../assets/images/14.jpg";
import image4 from "../assets/images/16.jpg";
import image5 from "../assets/images/15.jpg";
import image6 from "../assets/images/16.jpg";

export default {
  data() {
    return {
      items: [
        {
          img: image1
        },
        {
          img: image2
        },
        {
          img: image3
        },
        {
          img: image4
        },
        {
          img: image5
        },
        {
          img: image6
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.portfolio {
  font-size: 40px;
  padding: 20px;
}
.ourportfolio::after {
  content: "";
  border-bottom-style: solid;
  border-bottom-width: medium;
  border-bottom-color: lightseagreen;
  display: inline-block;
  width: 5%;
}

.btn-outline-success {
  border-radius: 20px;
  border-color: lightseagreen;
  color: lightseagreen;
}
.btn-success {
  border-radius: 20px;
  background-color: lightseagreen;
  border-color: lightseagreen;
}
.ourportfolio-options:hover {
  background-color: lightseagreen;
}

@media (min-width: 320px) and (max-width: 480px) {
  .portfolio {
    font-size: 30px;
  }
  .option-button {
    margin: 26px;
    margin-right: 25px;
  }
  .btn-success {
    border-radius: 20px;
    background-color: lightseagreen;
    border-color: lightseagreen;
    padding: 3px;
    margin: 9px;
  }
  .ourportfolio::after {
    content: "";
    width: 15%;
  }
}
</style>

