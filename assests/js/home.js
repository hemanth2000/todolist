$("#del-btn").click(() => {
  var pendingtasks = $("#pendingtasks").serializeArray();

  if (pendingtasks.length > 0) {
    $.ajax({
      type: "POST",
      url: "/delete",
      data: pendingtasks,
      success: (data) => {
        (window.location.href = "/"), true;
      },
      dataType: "json",
    });
  }
});
