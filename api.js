const axios = require("axios");
var url =
  "https://kitadev.id/api/downloader/system/api.php?key=e30ed0489e0f9824edeb1ffa098c07106bdf8bcf&url=";
axios.get(url).then(function (res) {
console.log(res.data);

})
