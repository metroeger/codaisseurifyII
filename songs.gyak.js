function createSong(title) {
  var newSong = { title: title, completed: false };
  var artistId = $("#deleteartist").attr('href');


  $.ajax({
    type: "POST",
    url: artistId + "/songs.json",
    data: JSON.stringify({
      song: newSong
    }),
    contentType: "application/json",
    dataType: "json"
  })
  .done(function(data) {
    console.log(data);

    var newSongId = data.id;

    var label = $('<label></label>')
      .attr('for', newSongId)
      .html(title);

    var newSong = $('<input type="text" value="1" />')
      .attr('id', newSongId)

    var tableRow = $('<tr class="newSong"></td>')
      .attr('data-id', newSongId)
      .append($('<td>').append(newSong))
      .append($('<td>').append(label));

    $("#newSongList").append(tableRow);

  })

  .fail(function(error) {
    console.log(error)
    error_message = error.responseJSON.title[0];
    showError(error_message);
  });
}

  function submitSong(event) {
  event.preventDefault();
  createSong($("#song_title").val());
  $("#song_title").val(null);
}

function cleanUpDoneSongs(event) {
  event.preventDefault();

  $.each($(".success"), function(index, tableRow) {
    songId = $(tableRow).data('id');
    deleteSong(songId);
  });
}

function deleteSong(songId) {
  $.ajax({
    type: "DELETE",
    url: "/artist/" + songId + ".json",
    contentType: "application/json",
    dataType: "json"
  })
  .done(function(data) {
    $('tr[data-id="'+songId+'"]').remove();
  });
}


$(document).ready(function() {
  $("form").bind('submit', submitSong);
  $("#clean-up").bind('click', cleanUpDoneSongs);
});)

  .fail(function(error) {
    console.log(error)
    error_message = error.responseJSON.title[0];
    showError(error_message);
  });
}

  function submitSong(event) {
  event.preventDefault();
  createSong($("#song_title").val());
  $("#song_title").val(null);
}

function cleanUpDoneSongs(event) {
  event.preventDefault();

  $.each($(".success"), function(index, tableRow) {
    songId = $(tableRow).data('id');
    deleteSong(songId);
  });
}

function deleteSong(songId) {
  $.ajax({
    type: "DELETE",
    url: "/artist/" + songId + ".json",
    contentType: "application/json",
    dataType: "json"
  })
  .done(function(data) {
    $('tr[data-id="'+songId+'"]').remove();
  });
}


$(document).ready(function() {
  $("form").bind('submit', submitSong);
  $("#clean-up").bind('click', cleanUpDoneSongs);
});
