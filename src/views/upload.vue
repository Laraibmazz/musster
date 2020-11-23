<template>
    <div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <form action="/test/1" method="get">
            <h3 class="font-weight-bolder">
                Upload file
            </h3>
            <div class="custom-file mt-4 w-50">
                <input id="my-input" class="custom-file-input" type="file" name="">
                <label for="my-input" class="custom-file-label">Select media</label>
            </div>
            <div class="row justify-content-center mt-4">
                <div class="jumbotron pt-2 pb-4 w-50" onclick="document.getElementById('my-input').click();">
                    <img src="https://cdn4.iconfinder.com/data/icons/files-20/32/332-01-512.png" alt="upload"
                        width="200">
                    <div class="custom-file mt-4">
                        <input id="my-input" class="custom-file-input" type="file" name=""
                            oninput="document.getElementById('my-input-label').innerHTML = this.files[0].name;console.log(this.files[0].name);">
                        <label for="my-input" id="my-input-label" class="custom-file-label">Select media</label>
                    </div>
                </div>
            </div>
            <button type="submit">
                Submit
            </button>
        </form>

    </div>
</template>

<script>
    export default {
        name: "upload"
    }
</script>