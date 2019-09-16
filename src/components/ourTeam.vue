<template>
  <div class="container">
    <!-- Our Team Section  -->
    <div class="ourTeam-demo">
      <div class="ourTeam mt-5">
        <!-- Our Team Heading  -->
        <div class="justify-content center font-weight-bolder team">OUR TEAM</div>
        <!-- Border Bottom  -->
        <!-- <div class="border-bottom-look mb-5"></div> -->
      </div>
      <!-- Dummy Text Under Our Team Section  -->
      <div class="ourteam-text pt-3 mb-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry Lorem Ipsum is simply dummy text.
      </div>

      <!-- Card Details For Our Team Intro  -->

      <div class="ourteam-intro">
        <div class="row">
          <div
            class="col-md-3 team-intro"
            v-for="cardcontent in cardcontents"
            v-bind:key="cardcontent.index"
          >
            <!-- Card Image  -->
            <img :src="cardcontent.img" alt="team" class="card-img-top" />
            <div class="card-body bg-light">
              <!-- Name On The Card  -->
              <div class="card-name font-weight-bolder">{{cardcontent.name}}</div>
              <!-- Title Of The Card  -->
              <div class="card-text">{{cardcontent.title}}</div>

              <!-- Font Awesome Icons For Social Media Links  -->
              <ul class="social-media-links d-flex mt-4">
                <!-- Facebook Icon  -->
                <li class="social-media-icon facebook-icon">
                  <a href="https://facebook.com" target="_blank">
                    <font-awesome-icon :icon="['fab', 'facebook-f']" class="fa-1x text-info mx-2" />
                  </a>
                </li>

                <!-- Twitter Icon  -->
                <li class="social-media-icon twitter-icon">
                  <a href="https://twitter.com" target="_blank">
                    <font-awesome-icon :icon="['fab', 'twitter']" class="fa-1x text-info mx-2" />
                  </a>
                </li>

                <!-- GooglePlus G Icon  -->
                <li class="social-media-icon googleplusg-icon">
                  <a href="https://googleplus.com" target="_blank">
                    <font-awesome-icon
                      :icon="['fab', 'google-plus-g']"
                      class="fa-1x text-info mx-2"
                    />
                  </a>
                </li>

                <!-- LinkedIn Icon  -->
                <li class="social-media-icon linkedin-icon">
                  <a href="https://linkedin.com" target="_blank">
                    <font-awesome-icon :icon="['fab', 'linkedin']" class="fa-1x text-info mx-2" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import image1 from "../assets/images/ceo.jpeg";
import image2 from "../assets/images/founder.jpeg";
import image3 from "../assets/images/otherceo.jpeg";
import image4 from "../assets/images/newceo.jpeg";

export default {
  data() {
    return {
      cardcontents: [
        {
          img: image1,
          name: "Jhon Doe",
          title: "Chief Technical Officer"
        },
        {
          img: image2,
          name: "Paul Kowalsy",
          title: "CEO and Co-Founder"
        },
        {
          img: image3,
          name: "Emilly Williams",
          title: "Business Manager"
        },
        {
          img: image4,
          name: "Patricia Green",
          title: "Graphic Designer"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.team {
  font-size: 40px;
}

.ourTeam::after {
  content: "";
  border-bottom-style: solid;
  border-bottom-width: medium;
  border-bottom-color: lightseagreen;
  display: inline-block;
  width: 5%;
}
.card-name {
  font-size: 20px;
}
.social-media-links {
  padding-left: 0px;
  list-style: none;
  margin-left: 27px;

  .social-media-icon {
    border-radius: 24px;
    background-color: white;
    margin: 2px;
    padding-left: 0px;
    width: 2rem;
    height: 2rem;
  }
}
@media (min-width: 320px) and (max-width: 480px) {
  .team {
    font-size: 30px;
  }

  .ourTeam::after {
    content: "";
    width: 15%;
  }
  .social-media-links {
    margin-left: 72px;
  }
  .card-body {
    margin-bottom: 50px;
  }
}
@media (min-width: 320px) and (max-width: 568px) {
  .social-media-links {
    margin-left: 49px;
  }
}
@media (min-width: 320px) and (max-width: 568px) {
  .social-media-links {
    margin-left: 58px;
  }
}
@media (min-width: 375px) and (max-width: 667px) {
  .social-media-links {
    margin-left: 79px;
  }
}
@media (min-width: 412px) and (max-width: 732px) {
  .social-media-links {
    margin-left: 99px;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .card-body {
    padding: 8px;
  }
  .social-media-links {
    margin-left: 24px;
  }
}
</style>
