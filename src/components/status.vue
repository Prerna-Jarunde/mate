<template>
  <!-- Status Section  -->
  <div class="status mt-5">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <!-- Working Hours Section  -->
          <div class="working-hours text-white mt-5">
            <!-- Font Awesome Icon For Clock  -->
            <div class="clock">
              <font-awesome-icon :icon="['far', 'clock']" class="fa-3x" />
            </div>
            <!-- Working Hours Status -->
            <div class="total">1589</div>
            <div class="current-status">Working Hours</div>
          </div>
        </div>

        <!-- Completed Projects Section  -->
        <div class="col-md-3">
          <div class="completed-projects text-white mt-5">
            <!-- Font Awesome Icon For BriefCase  -->
            <div class="briefcase">
              <font-awesome-icon :icon="['fas', 'briefcase']" class="fa-3x" />
            </div>
            <!-- Completed Projects Status -->
            <div class="total">699</div>
            <div class="current-status">Completed Projects</div>
          </div>
        </div>

        <!-- No Of Clients Section  -->
        <div class="col-md-3">
          <div class="clients text-white mt-5">
            <!-- Font Awesome Icon For User  -->
            <div class="user">
              <font-awesome-icon :icon="['far', 'user']" class="fa-3x" />
            </div>
            <!-- No Of Clients Status  -->
            <div class="total">202</div>
            <div class="current-status">No Of Clients</div>
          </div>
        </div>

        <!-- People's Love Section  -->
        <div class="col-md-3">
          <div class="people-love text-white mt-5">
            <!-- Font Awesome Icon For Heart  -->
            <div class="heart">
              <font-awesome-icon :icon="['far', 'heart']" class="fa-3x" />
            </div>
            <!-- People's Love  -->
            <div class="total">1689</div>
            <div class="current-status">People's Love</div>
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
.status {
  background-image: url("../assets/images/office.jpg");
  background-repeat: no-repeat;
  background-size: auto;
  height: 40vh;
  width: 100%;
  opacity: 0.5;
  filter: alpha(opacity=50);
}
.total {
  font-size: 30px;
}
.current-status {
  font-size: 25px;
}

@media (min-width: 320px) and (max-width: 480px) {
  .status {
    height: 126vh;
    .total {
      font-size: 25px;
    }
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .status {
    height: 30vh;
  }
}
</style>
