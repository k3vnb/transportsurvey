$(document).ready(function() {
  $("form#transportation_survey").submit(function(event) {
    event.preventDefault();
    $("#work-responses").show();
    $("input:checkbox[name=work-transportation]:checked").each(function() {
      var workTransportMode = $(this).val();
      $("#work-responses").append(workTransportMode + "<br>");
    });
    $("#transportation_survey").hide();
  });
  $("form#transportation_survey2").submit(function(event) {
    event.preventDefault();
    $("#other-responses").show();
    $("input:checkbox[name=other-transportation]:checked").each(function() {
      var otherTransportMode = $(this).val();
      $("#other-responses").append(otherTransportMode + "<br>");
    });
    $("#transportation_survey2").hide();
  });
});
