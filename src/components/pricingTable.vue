<template>
  <div class="container">
    <!-- Pricing Table Section  -->
    <div class="pricing-table mt-5">
      <!-- Pricing Table Section Heading  -->
      <div class="justify-content center font-weight-bolder pricing">PRICING TABLE</div>
    </div>
    <!-- Dummy Text Under Pricing Table Section  -->
    <div class="pricingtable-text mt-2">
      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </div>
      <div>Lorem Ipsum is simply dummy text.</div>
    </div>

    <!-- Card Section Under Pricing Table  -->
    <div class="row pt-5">
      <div class="col-md-4" v-for="cardcontent in cardcontents" v-bind:key="cardcontent.index">
        <div class="card">
          <!-- Card Header  -->
          <div class="card-header font-weight-bolder">{{cardcontent.header}}</div>
          <!-- Card Body  -->
          <div class="card-body">
            <!-- Card Amount  -->
            <div class="card-amount font-weight-bolder">{{cardcontent.amount}}</div>
            <!-- Card Title  -->
            <div class="card-title">{{cardcontent.title}}</div>
            <div class="card-title">{{cardcontent.title}}</div>
            <div class="card-title">{{cardcontent.title}}</div>
            <!-- Button  -->
            <div class="btn btn-success option btn-lg button" button>{{cardcontent.button}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cardcontents: [
        {
          header: "Free",
          amount: "$00",
          title:
            "It is a long established fact that a reader will be distracted",
          button: "Get Plan"
        },
        {
          header: "Popular",
          amount: "$3.99",
          title:
            "It is a long established fact that a reader will be distracted",
          button: "Buy Now"
        },
        {
          header: "Premium",
          amount: "$9.50",
          title:
            "It is a long established fact that a reader will be distracted",
          button: "Buy Now"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.pricing {
  font-size: 40px;
}

.pricing-table::after {
  content: "";
  border-bottom-style: solid;
  border-bottom-width: medium;
  border-bottom-color: lightseagreen;
  display: inline-block;
  width: 5%;
  // margin: 0 10% 0 10%;
}
.card-header {
  font-size: 25px;
}
.card-amount {
  font-size: 40px;
  color: lightseagreen;
}
.button {
  color: #fff;
  background-color: lightseagreen;
  border-color: lightseagreen;
  border-radius: 26px;
}
.option:hover {
  background-color: lightseagreen;
}

@media (min-width: 320px) and (max-width: 480px) {
  .pricing-table::after {
    content: "";
    width: 15%;
  }
  .pricing {
    font-size: 30px;
  }
}
</style>
