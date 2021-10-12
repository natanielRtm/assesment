<template>
  <div class="home">
    <b-jumbotron>
      <div class="jumbotron">
        <div class="desc">
          <p>
            <strong>Booked Tool</strong> enables you to create Interactive
            Advertisement
          </p>

          <b-button variant="primary" href="#">What is it?</b-button>
        </div>
      </div>
    </b-jumbotron>
    <div class="login">
      <div>
        <p>Please log in to start using</p>
        <h5>Booked Tool</h5>
      </div>
      <b-form class="d-flex justify-content-between m-2">
        <b-form-input
          id="inline-form-input-email"
          class="p-2"
          placeholder="Email"
        ></b-form-input>
        <span>&#8287;&#8287;&#8287;</span>
        <b-form-input
          class="p-2"
          id="inline-form-input-password"
          type="password"
          placeholder="Password"
        ></b-form-input>
        <span>&#8287;&#8287;&#8287;</span>
        <b-button variant="primary" class="p-2">Login</b-button>
      </b-form>
    </div>
    <div class="discover" id="discover">
      <i class="fas fa-desktop mb-2"></i>
      <p><strong>DISCOVER</strong></p>
      <p>BOOKED TOOL</p>
      <img
        src="../assets/discover.jpg"
        alt="discover"
        class="discover-img m-3"
      />
      <b-tabs class="mt-3 mb-3" justified>
        <b-tab title="Discover A" active
          ><p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec
            ultrices dui sapien eget mi. In hendrerit gravida rutrum quisque.
            Viverra adipiscing at in tellus. Enim facilisis gravida neque
            convallis a cras semper auctor neque. Elementum integer enim neque
            volutpat ac. Vitae et leo duis ut. Sagittis nisl rhoncus mattis
            rhoncus urna neque. Enim facilisis gravida neque convallis. In vitae
            turpis massa sed elementum tempus egestas sed sed. Pharetra pharetra
            massa massa ultricies mi quis hendrerit dolor.
          </p></b-tab
        >
        <b-tab title="Discover B"
          ><p>
            Ultricies leo integer malesuada nunc vel risus. Euismod in
            pellentesque massa placerat duis. Turpis in eu mi bibendum neque
            egestas. Diam sit amet nisl suscipit adipiscing. Velit egestas dui
            id ornare arcu. Ullamcorper sit amet risus nullam. Tellus id
            interdum velit laoreet.
          </p></b-tab
        >
        <b-tab title="Discover C"
          ><p>
            Tincidunt lobortis feugiat vivamus at augue eget. Mattis aliquam
            faucibus purus in. Et ligula ullamcorper malesuada proin libero nunc
            consequat. Donec pretium vulputate sapien nec. Mattis pellentesque
            id nibh tortor id aliquet lectus proin nibh. Egestas congue quisque
            egestas diam. Sodales ut etiam sit amet nisl purus in mollis.
            Blandit libero volutpat sed cras. Rutrum quisque non tellus orci.
            Quis blandit turpis cursus in hac.
          </p></b-tab
        >
        <b-tab title="Discover D"
          ><p>
            At ultrices mi tempus imperdiet. Et ultrices neque ornare aenean
            euismod elementum. A arcu cursus vitae congue mauris rhoncus aenean
            vel elit. Faucibus scelerisque eleifend donec pretium vulputate
            sapien nec sagittis.
          </p></b-tab
        >
      </b-tabs>
    </div>

    <div class="map-box" id="map-box">
      <div class="map">
        <i class="fas fa-route"></i>
        <p><strong>Get in touch</strong></p>
        <p>
          Want to get in touch? We'd love to hear from you. Here's how you can
          reach us..
        </p>
        <b-input-group size="sm" class="mb-2 mt-3">
          <b-input-group-prepend is-text>
            <b-icon class="m-2" icon="search"></b-icon>
          </b-input-group-prepend>
          <b-form-input type="search" placeholder="Search"></b-form-input>
        </b-input-group>
        <div class="embed-feedback">
          <GoogleMap />
          <div class="feedback">
            <p class="mb-2"><strong>Feedback</strong></p>
            <b-form-group>
              <div class="d-flex justify-content-between">
                <b-form-input
                  class="mb-2 p-2"
                  id="first"
                  size="sm"
                  placeholder="First"
                ></b-form-input>
                <b-form-input
                  class="mb-2 p-2"
                  id="last"
                  size="sm"
                  placeholder="Last"
                ></b-form-input>
              </div>
              <b-form-input
                class="mb-2 p-2"
                id="email"
                size="sm"
                placeholder="Email"
              ></b-form-input>
              <b-form-textarea
                id="textarea-rows"
                placeholder="Message"
                rows="5"
                class="p-2"
              ></b-form-textarea>
              <b-button class="mt-3 p-2" variant="primary">Send</b-button>
            </b-form-group>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GoogleMap from "../components/GoogleMap.vue";

export default {
  name: "Home",
  components: { GoogleMap },
};
</script>
<style lang="scss" scoped>
.jumbotron {
  background-image: url("../assets/nordwood.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 90vh;
}

@media (max-width: 860px) {
  .jumbotron {
    display: flex;
    flex-direction: column;
    background-size: cover;
    background-repeat: no-repeat;
  }
}
</style>