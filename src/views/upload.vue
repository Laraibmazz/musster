<template>
  <div>
    <div class="container mt-5">
      <h4>
        <strong>
          Upload a track
        </strong>
      </h4>
      <br />
      <div
        class="col-sm-8 col-md-4 col-md-12 col-lg-6 mr-auto ml-auto border p-4"
      >
        <form
          method="post"
          enctype="multipart/form-data"
          action="http://localhost:3000/upload"
        >
          <div class="form-group">
            <label>
              <strong>
                Title
              </strong>
            </label>
            <div class="custom-file">
              <input
                type="text"
                class="form-control form-control"
                id="colFormLabel"
                placeholder=" Title "
                name="title"
                required
              />
            </div>
          </div>
          <div class="form-group">
            <label>
              <strong>
                Singer
              </strong>
            </label>
            <div class="custom-file">
              <input
                type="text"
                class="form-control form-control"
                id="colFormLabel"
                placeholder=" Singer "
                name="Singer"
                required
              />
            </div>
          </div>
          <div class="form-group">
            <label>
              <strong>
                Upload file
              </strong>
            </label>
            <div class="custom-file">
              <input
                type="file"
                name="file"
                multiple
                class="custom-file-input form-control"
                id="customFile"
                accept="audio/*"
                required
              />
              <label class="custom-file-label" for="customFile"
                >Select Song</label
              >
            </div>
          </div>
          <div class="form-group pt-1">
            <button
              type="submit"
              name="upload"
              value="upload"
              id="upload"
              class="btn btn-block btn-dark"
            >
              <i class="fa fa-fw fa-upload"></i> Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import "../../node_modules/jquery/dist/jquery.min.js";
import $ from "jquery";

export default {
  name: "upload",
  mounted() {
    $(document).ready(function() {
      $('input[type="file"]').on("change", function() {
        let filenames = [];
        let files = document.getElementById("customFile").files;
        filenames.push(files[0].name);
        $(this)
          .next(".custom-file-label")
          .html(filenames.join(","));
      });
    });
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>