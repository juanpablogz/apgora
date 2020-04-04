<template>
  <div>
    <div>
      <mdb-btn size="sm" color="purple" @click.native="elegant = true"
        >signIn
      </mdb-btn>
      <mdb-modal :show="elegant" @close="elegant = false" elegant>
        <mdb-modal-header class="text-center">
          <mdb-modal-title tag="h3" bold class="w-100 my-3"
            >Sign in</mdb-modal-title
          >
        </mdb-modal-header>
        <mdb-modal-body class="mx-3">
          <mdb-input
            v-model="email"
            label="Your email"
            type="email"
            class="mb-5 grey-text"
          />
          <mdb-input
            v-model="password"
            label="Enter password"
            type="password"
            class="pb-3"
          ></mdb-input>
          <p class="font-small blue-text d-flex justify-content-end mb-5">
            Forgot <a class="ml-1"> Password?</a>
          </p>
          <div class="text-center mb-3">
            <mdb-btn
              gradient="purple"
              type="submit"
              @click="action"
              class="fadeIn fourth"
              value="Ingresar"
              >Ingresar</mdb-btn
            >
          </div>
          <p
            class="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"
          >
            or Sign in with:
          </p>
          <mdb-row center class="my-3">
            <mdb-btn color="white" rounded class="mr-md-3 z-depth-1a"
              ><mdb-icon fab color="info" icon="facebook-f"
            /></mdb-btn>
            <mdb-btn color="white" rounded class="mr-md-3 z-depth-1a"
              ><mdb-icon fab color="info" icon="twitter"
            /></mdb-btn>
            <mdb-btn color="white" rounded class="mr-md-3 z-depth-1a"
              ><mdb-icon fab color="info" icon="google-plus-g"
            /></mdb-btn>
          </mdb-row>
        </mdb-modal-body>
        <mdb-modal-footer class="mx-5 pt-3 mb-1" end>
          <p class="font-small grey-text">
            Not a member? <a class="blue-text ml-1">Sign Up</a>
          </p>
        </mdb-modal-footer>
      </mdb-modal>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";
import {
  mdbContainer,
  mdbBtn,
  mdbModal,
  mdbModalHeader,
  mdbModalBody,
  mdbInput,
  mdbModalFooter,
  mdbModalTitle,
  mdbRow,
  mdbIcon,
} from "mdbvue";
export default {
  data() {
    return {
      name: "signIn",
    };
  },
  name: "signIn",
  components: {
    // HelloWorld
    mdbContainer,
    mdbBtn,
    mdbModal,
    mdbModalHeader,
    mdbModalBody,
    mdbInput,
    mdbModalFooter,
    mdbModalTitle,
    mdbRow,
    mdbIcon,
  },
  methods: {
    action() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => {
            console.log("login" + JSON.stringify(user));
            window.localStorage.setItem("authenticated", true);
            window.localStorage.setItem("user", JSON.stringify(user));
            this.$router.push("/home");
          },
          (err) => {
            console.log("Erro -> " + JSON.stringify(err));
            window.localStorage.setItem("authenticated", false);
            window.localStorage.setItem("user", null);
          }
        );
    },
  },
};
</script>
