<template>
  <div class="home">
    <div class="mt-4 container-fluid d-flex justify-content-between">
      <div>
        <div class="d-flex">
          <h6 class="font-weight-light">
            Music
          </h6>
          <h6 class="font-weight-bolder">
            Alfa
          </h6>
        </div>
        <hr class="bg-secondary p-0 m-0" style="height: 1px;" />
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <div class="container-fluid">
      <div class="d-flex justify-content-center">
        <div style="width: 280px;height: 280px;">
          <img
            class="rounded-circle img-thumbnail"
            id="track-img"
            style="width: 280px;height: 280px;object-fit: cover;"
            src="https://media.nu.nl/m/4q5xnodakjko_wd1280.jpg"
            alt=""
          />
          <h6 class="d-flex justify-content-center pt-3">
            {{ name }}
          </h6>
          <small
            class="d-flex justify-content-center text-secondary"
            style="font-size: smaller;"
          >
            {{ artist }}
          </small>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div class="row align-items-center justify-content-center">
        <small class="mr-1 text-secondary">
          1:30
        </small>
        <div
          class="progress d-flex justify-content-between"
          style="width: 400px;height: 10px;"
          id="player"
        >
          <div
            class="progress-bar bg-dark"
            id="track"
            style="width: 0;"
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <small class="ml-1 text-secondary">
          4:39
        </small>
      </div>
      <br />
      <div
        class="d-flex justify-content-between align-items-end m-auto mt-4 pt-4"
        style="width: 500px;"
      >
        <button class="btn btn-light" id="start">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-skip-start-fill"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.5 3.5A.5.5 0 0 0 4 4v8a.5.5 0 0 0 1 0V4a.5.5 0 0 0-.5-.5z"
            />
            <path
              d="M4.903 8.697l6.364 3.692c.54.313 1.232-.066 1.232-.697V4.308c0-.63-.692-1.01-1.232-.696L4.903 7.304a.802.802 0 0 0 0 1.393z"
            />
          </svg>
        </button>
        <button class="btn btn-light" id="play">
          <svg
            id="played"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-pause-fill"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            style="display: none;"
          >
            <path
              d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"
            />
          </svg>
          <svg
            id="paused"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-play-fill"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
            />
          </svg>
        </button>
        <button class="btn btn-light" id="end">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-skip-end-fill"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M12 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"
            />
            <path
              d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
            />
          </svg>
        </button>
        <div class="d-flex justify-content-center align-items-center">
          <button class="btn btn-light" id="volume">
            <svg
              width=" 1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-volume-down-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8.717 3.55A.5.5 0 0 1 9 4v8a.5.5 0 0 1-.812.39L5.825 10.5H3.5A.5.5 0 0 1 3 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"
              />
              <path
                d="M10.707 11.182A4.486 4.486 0 0 0 12.025 8a4.486 4.486 0 0 0-1.318-3.182L10 5.525A3.489 3.489 0 0 1 11.025 8c0 .966-.392 1.841-1.025 2.475l.707.707z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import "bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default {
  name: "Home",
  data() {
    return {
      artist: "Bizzey",
      name: "Traag"
    };
  },
  async mounted() {
    this.src();
    this.play();
    this.end();
    this.start();
    this.timeUpdate();
    this.player();
    this.check();
  },
  methods: {
    src() {
      document.getElementById("aud").src =
        "/media/" + this.$route.params.name + ".mp3";
    },
    play() {
      document.getElementById("play").onclick = () => {
        if (document.getElementById("aud").paused) {
          document.getElementById("aud").play();
          document.getElementById("track-img").style.animationPlayState =
            "running";
          document.getElementById("paused").style.display = "none";
          document.getElementById("played").style.display = "inline";
        } else {
          document.getElementById("aud").pause();
          document.getElementById("track-img").style.animationPlayState =
            "paused";
          document.getElementById("played").style.display = "none";
          document.getElementById("paused").style.display = "inline";
        }
      };
    },
    start() {
      document.getElementById("start").onclick = () => {
        document.getElementById("aud").currentTime = 0;
      };
    },
    end() {
      var aud = document.getElementById("aud");
      document.getElementById("end").onclick = () => {
        aud.currentTime = aud.duration;
        setTimeout(() => {
          document.getElementById("played").style.display = "none";
          document.getElementById("paused").style.display = "inline";
          document.getElementById("track-img").style.animationPlayState =
            "paused";
        }, 400);
      };
    },
    timeUpdate() {
      document.getElementById("aud").ontimeupdate = () => {
        document.getElementById("track").style.width =
          (document.getElementById("aud").currentTime /
            document.getElementById("aud").duration) *
            100 +
          "%";
      };
    },
    player() {
      document.getElementById("player").addEventListener("click", e => {
        document.getElementById("aud").currentTime =
          (document.getElementById("aud").duration *
            ((e.offsetX /
              parseInt(document.getElementById("player").style.width)) *
              100)) /
          100;
      });
    }
  }
};
</script>

<style scoped>
#track-img {
  animation: rotate 15s linear infinite;
  animation-play-state: paused;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
