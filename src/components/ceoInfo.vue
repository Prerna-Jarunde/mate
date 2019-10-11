<template>
  <div class="info bg-secondary mt-4">
    <div class="container">
      <!--  Swiper Slider -->
      <swiper ref="mySwiper" :options="swiperOption" @someSwiperEvent="callback">
        <!-- slides -->
        <swiper-slide
          v-for="cardcontent in cardcontents"
          :key="cardcontent.index"
          class="swiper-card"
        >
          <div class="swiper-card-section">
            <div class="photo-image">
              <img :src="cardcontent.image" class="img-fluid imageresize" alt="ceo-photos" />
            </div>

            <div class="card-main-content">
              <div class="card-desc text-white">
                <div class="card-title">{{ cardcontent.title }}</div>
                <div class="card-text">
                  <div class="card-text">{{ cardcontent.name }}</div>
                  <div class="card-text">{{ cardcontent.designation }}</div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <!-- Optional controls -->
        <div slot="pagination" class="swiper-pagination"></div>
        <div slot="button-prev" class="swiper-button swiper-button-prev swiper-button-white"></div>
        <div slot="button-next" class="swiper-button swiper-button-next swiper-button-white"></div>
        <!-- <div slot="scrollbar" class="swiper-scrollbar"></div> -->
      </swiper>
      <!-- Swiper Slider End -->
    </div>
  </div>
</template>

<script>
import img1 from "../assets/images/mark.jpg";
import img2 from "../assets/images/ceowoman.jpeg";
import img3 from "../assets/images/womenceo.jpeg";
import img4 from "../assets/images/tim.jpg";
export default {
  name: "Carrousel",
  data() {
    return {
      cardcontents: [
        {
          image: img1,
          title:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
          name: "Mark Zukerberg",
          designation: "CEO Facebook"
        },
        {
          image: img2,
          title:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
          name: "Mary Barra",
          designation: "CEO & Founder"
        },
        {
          image: img3,
          title:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
          name: "Laurie Lang",
          designation: "CEO Optima Inc"
        },
        {
          image: img4,
          title:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
          name: "Tim Cook",
          designation: "CEO & Founder"
        }
      ],
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 10,
        freeMode: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  }
};
</script>
<style lang="scss">
.imageresize {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  border: solid white;
}
.swiper-slide {
  margin-top: 30px;
  margin-bottom: 30px;

  .swiper-card-section {
    max-width: 350px;
    width: 350px;
    padding: 20px;
    margin-left: 72px;
    margin-top: 30px;
    margin-bottom: 30px;
    .photo-image {
      width: 100%;
      height: 100%;
      overflow: hidden;
      margin-top: 50px;
    }

    .card-desc {
      min-height: 20vh;

      .card-title {
        min-height: 12vh;
        margin-top: 42px;
      }
      .card-text {
        padding-top: 8px;
      }
    }
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .swiper-slide {
    margin-top: 30px;
    margin-bottom: 30px;

    .swiper-card-section {
      width: 327px;
      margin-left: 0px;
    }
  }
  .swiper-button-prev.swiper-button-white {
    height: 27px;
    margin-top: 58px;
  }
  .swiper-button-next.swiper-button-white {
    height: 27px;
    margin-top: 58px;
  }
}
@media (min-width: 1024px) and (max-width: 1366px) {
  .swiper-slide {
    margin-top: 30px;
    margin-bottom: 30px;

    .swiper-card-section {
      width: 327px;
      margin-left: 60px;
    }
  }
  .swiper-button-prev.swiper-button-white {
    height: 37px;
    margin-top: 58px;
  }
  .swiper-button-next.swiper-button-white {
    height: 37px;
    margin-top: 58px;
    margin-right: 100px;
  }
}
@media (min-width: 414px) and (max-width: 736px) {
  .swiper-slide .swiper-card-section {
    max-width: 119px;
    width: 350px;
    padding: 20px;
    margin-left: 40px;
    margin-top: 1px;
    margin-bottom: 30px;
    font-size: 10px;
  }
}
// @media (min-width: 375px) and (max-width: 667px) {
//   .swiper-slide .swiper-card-section {
//     max-width: 100px;
//     width: 350px;
//     padding: 20px;
//     margin-left: 37px;
//     margin-top: 1px;
//     margin-bottom: 30px;
//     font-size: 10px;
//   }
// }
@media (min-width: 320px) and (max-width: 568px) {
  .swiper-slide .swiper-card-section {
    max-width: 100px;
    width: 350px;
    padding: 20px;
    margin-left: 20px;
    margin-top: 1px;
    margin-bottom: 30px;
    font-size: 10px;
  }
  .swiper-button-prev.swiper-button-white {
    height: 25px;
  }
  .swiper-button-next.swiper-button-white {
    height: 25px;
  }
}
@media (min-width: 412px) and (max-width: 732px) {
  .swiper-slide .swiper-card-section {
    max-width: 100px;
    width: 350px;
    padding: 20px;
    margin-left: 40px;
    margin-top: 1px;
    margin-bottom: 30px;
    font-size: 10px;
  }
  .swiper-button-prev.swiper-button-white {
    height: 27px;
  }
  .swiper-button-next.swiper-button-white {
    height: 27px;
  }
}
</style>
