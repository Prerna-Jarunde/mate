<template>
  <!-- Contact Us Section  -->
  <div class="connect bg-dark">
    <div class="container">
      <div class="row">
        <div class="col-md-6 contact-us">
          <div class="contact-with-us pt-5">
            <!-- Contact Us Heading  -->
            <div class="font-weight-bold text-white contact text-left">Contact With Us</div>

            <!-- Contact Address  -->
            <div class="contact-address pt-5 text-white">
              <div class="text-left">CentreVille Road,DE19808,US</div>
            </div>

            <!-- Contact Phone  -->
            <div class="contact-phone pt-3 text-white">
              <div class="text-left">
                Phone:
                <span class="data">(+94 123 456 789)</span>
              </div>
            </div>

            <!-- Contact Email  -->
            <div class="contact-email pt-3 text-white">
              <div class="text-left">
                E-mail:
                <span class="data">(contact@mate.com)</span>
              </div>
            </div>

            <!-- Social Media Links And Icons  -->
            <ul class="social-media-links d-flex mt-4">
              <!-- FaceBook Icon  -->
              <li class="social-media-icon facebook-icon">
                <a href="https://facebook.com" target="_blank">
                  <font-awesome-icon :icon="['fab', 'facebook-f']" class="fa-1x text-primary mx-2" />
                </a>
              </li>

              <!-- Twitter Icon  -->
              <li class="social-media-icon twitter-icon">
                <a href="https://twitter.com" target="_blank">
                  <font-awesome-icon :icon="['fab', 'twitter']" class="fa-1x text-info mx-2" />
                </a>
              </li>

              <!-- GooglePlus Icon  -->
              <li class="social-media-icon googleplusg-icon">
                <a href="https://googleplus.com" target="_blank">
                  <font-awesome-icon
                    :icon="['fab', 'google-plus-g']"
                    class="fa-1x text-danger mx-2"
                  />
                </a>
              </li>

              <!-- LinkedIn Icon  -->
              <li class="social-media-icon linkedin-icon">
                <a href="https://linkedin.com" target="_blank">
                  <font-awesome-icon :icon="['fab', 'linkedin']" class="fa-1x text-primary mx-2" />
                </a>
              </li>

              <!-- Dribbble Icon  -->
              <li class="social-media-icon dribbble-icon">
                <a href="https://dribbble.com" target="_blank">
                  <font-awesome-icon :icon="['fab', 'dribbble']" class="fa-1x text-danger mx-2" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Form Group PlaceHolder Sections -->

        <!-- Name Placeholder  -->
        <div class="col-md-6 pt-5 mb-5">
          <form>
            <div class="form-group pt-2">
              <input
                type="name"
                class="form-control input-field bg-dark text-muted"
                id="exampleInputName1"
                aria-describedby="nameHelp"
                placeholder="Your Name"
              />
            </div>

            <!-- Email Placeholder  -->
            <div class="form-group">
              <input
                type="email"
                class="form-control input-field bg-dark text-muted"
                id="exampleInputEmail1"
                placeholder="Your Email"
              />
            </div>

            <!--Message  Placeholder  -->
            <div class="form-group">
              <textarea
                type="message"
                class="form-control message input-field bg-dark text-muted"
                id="exampleInputMessage1"
                placeholder="Your Message"
                rows="5"
              />
            </div>

            <!-- Button For Send Message -->
            <button type="submit" class="btn btn-success send-message">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.contact-us {
  padding-left: 70px;
}
.contact {
  font-size: 40px;
}

.btn-success {
  border-radius: 20px;
  background-color: lightseagreen;
}
.data {
  color: lightseagreen;
}
.input-field {
  border-radius: 0px;
}
.social-media-links {
  padding-left: 0px;
  list-style: none;
  height: 2rem;
  width: 2rem;

  .social-media-icon {
    border-radius: 24px;
    background-color: white;
    margin: 2px;
    padding-left: 0px;
    width: 2rem;
    padding-top: 3px;
  }
  .svg:not(:root).svg-inline--fa {
    overflow: visible;
    margin-top: 7px;
  }
}
.send-message:hover {
  background-color: lightseagreen;
}
@media (min-width: 320px) and (max-width: 480px) {
  .contact-us {
    padding-left: 36px;
  }
  .contact {
    font-size: 30px;
  }
}
@media (min-width: 320px) and (max-width: 568px) {
  .contact-us {
    padding-left: 17px;
  }
}
</style> 