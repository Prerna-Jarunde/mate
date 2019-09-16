<template>
  <!-- Recent Blog Section  -->
  <div class="container">
    <div class="recentBlog pt-5">
      <!-- Recent Blog Heading  -->
      <div class="justify-content center font-weight-bolder recent">RECENT BLOG</div>
    </div>
    <!-- Dummy Text Under Recent Blog Section  -->
    <div class="recentblog-text pt-3 mb-3">
      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry Lorem Ipsum is simply dummy text.
      </div>
    </div>

    <!-- Card Content In Recent Blog Section  -->
    <div class="recentblog-desc pt-5 mb-3">
      <div class="row">
        <div
          class="col-md-4 recent-blog"
          v-for="cardcontent in cardcontents"
          v-bind:key="cardcontent.index"
        >
          <!-- Image Section  In Card  -->
          <div class style="width: 18rem;">
            <img :src="cardcontent.img" alt="team" class="card-img-top" />

            <div class>
              <!-- Clock and comments icon -->

              <!-- Font Awesome Clock Icon  -->
              <div class="clock d-flex">
                <font-awesome-icon :icon="['far', 'clock']" class="fa-1x" />
                <span class="active text-muted mx-2">2 Days Ago</span>
              </div>

              <!-- Font Awesome Comments Icon  -->
              <div class="comments">
                <font-awesome-icon :icon="['fas', 'comments']" class="fa-1x" />
                <span class="total-comments text-muted mt-4 mx-2">24 Comments</span>
              </div>

              <!-- Card Title  -->
              <div class="card-title font-weight-bold text-left pt-3">{{cardcontent.title}}</div>

              <!-- Card Description  -->
              <div class="card-text text-left">{{cardcontent.description}}</div>

              <!-- Button trigger modal -->
              <button
                type="button"
                class="btn btn-light read"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Read More
                <div class="arrow-right">
                  <font-awesome-icon :icon="['fas', 'arrow-right']" class="fa-1x" />
                </div>
              </button>

              <!-- Modal -->
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div
                      class="modal-body"
                    >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import image1 from "../assets/images/busy.jpeg";
import image2 from "../assets/images/people.jpg";
import image3 from "../assets/images/working.jpg";

export default {
  data() {
    return {
      cardcontents: [
        {
          img: image1,
          title: "How Often Should You Tweet?",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry it has been the industry's standard dummy text."
        },
        {
          img: image2,
          title: "Content Is Still King",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry it has been the industry's standard dummy text."
        },
        {
          img: image3,
          title: "Social Media At Work",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry it has been the industry's standard dummy text."
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.recent {
  font-size: 40px;
}

.recentBlog::after {
  content: "";
  border-bottom-style: solid;
  border-bottom-width: medium;
  border-bottom-color: lightseagreen;
  display: inline-block;
  width: 5%;
}
.read {
  margin-left: -178px;
  margin-top: 20px;

  .arrow-right {
    margin-top: -22px;
    margin-left: 101px;
  }
}
.recentblog-desc {
  padding: 60px;
}
.clock {
  margin-top: 8px;
}
.comments {
  font-size: 12px;
  margin-top: -16px;
}
.active {
  font-size: 12px;
}
@media (min-width: 320px) and (max-width: 480px) {
  .recent {
    font-size: 30px;
  }

  .recentblog-desc {
    padding-left: 2px;
  }
  .read {
    margin: 6px 151px 38px 0px;
  }
  .recentBlog::after {
    content: "";
    width: 15%;
  }
}

@media (min-width: 320px) and (max-width: 568px) {
  .recentblog-desc {
    margin-right: 23px;
  }
}

@media (min-width: 375px) and (max-width: 667px) {
  .recentblog-desc {
    padding-left: 29px;
  }
}

@media (min-width: 360px) and (max-width: 640px) {
  .recentblog-desc {
    padding-left: 23px;
  }
}

@media (min-width: 375px) and (max-width: 667px) {
  .recentblog-desc {
    padding-left: 26px;
  }
}

@media (min-width: 412px) and (max-width: 732px) {
  .recentblog-desc {
    padding-left: 49px;
  }
}
@media (min-width: 414px) and (max-width: 736px) {
  .recentblog-desc {
    padding-left: 44px;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .recent-blog {
    margin: 41px;
    // margin-right: 48px;
    // margin-left: 56px;
  }
  .recentblog-desc {
    padding: 0px;
  }
}
@media (min-width: 1024px) and (max-width: 1366px) {
  .recentblog-desc {
    padding: 0px;
    margin-left: 100px;
  }
}
</style>
