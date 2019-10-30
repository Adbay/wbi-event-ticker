$(function() {
  // load the widget configuration
  var config = new WidgetConfig();
  config.on("config-initialized", function(event, data) {
    //$("#output").text(config.preferences["Article Number"]);
    //load the page
    $.get(
      "https://script.google.com/macros/s/AKfycbwCGC5P3Qh68v4dcTJiaumVnxdhsm3CWTFd5SvAtqXrrdr0H1YP/exec",
      "",
      function(data, textStatus, jqXHR) {
        for (var i = 0; i < data.length; i++) {
          $(".ticker").append(
            '<div class="ticker__item">' +
              data[i][0] +
              ", " +
              data[i][3] +
              " - " +
              data[i][1] +
              " @ " +
              data[i][2] +
              "</div>"
          );
        }
      }
    );
  });
  config.on("config-error", function() {
    $("#output").text("Error loading preferences");
  });
  config.init();
});

function get_random(myList) {
  return Math.floor(Math.random() * 72);
}
