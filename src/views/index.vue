<template>
  <div>
    <div class="container-fluid">
      <div
        class="mt-4 container-fluid d-flex justify-content-between align-content-center"
      >
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
        <nav class="nav">
          <li class="nav-item">
            <a class="nav-link active" href="/#/upload">
              <button
                class="btn text-light pl-2 pr-2 pt-1 pb-1 font-weight-lighter bg-primary"
              >
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-upload"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"
                  />
                </svg>

                <small>
                  Upload
                </small>
              </button>
            </a>
          </li>
        </nav>
      </div>
    </div>
    <div class="container">
      <div class="p-4">
        <h1 class="slogan">
          Music always and forever.
        </h1>
      </div>
      <div class=""></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index"
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Sansita+Swashed:wght@900&display=swap");
.slogan {
  font-family: "Sansita Swashed", cursive;
  font-size: 55px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
