
function createSong(title) {
  var newSong = { title: title, completed: false };
  var checkboxId = "song-" + nextSongId();
  var artistId = $("#deleteartist").attr('href');

  $.ajax({
    type: "POST",
    url: artistId + "/songs.json",
    data: JSON.stringify({
        song: newSong
    }),
    contentType: "application/json",
    dataType: "json"
  });

  //var checkboxId = data.id;

  var listItem = $("<li></li>");
  listItem.addClass("song");

  var checkbox = $('<input>');
  checkbox.attr('type', 'checkbox');
  checkbox.attr('id', checkboxId);
  checkbox.val(1);

  var space = document.createTextNode(" ");

  var label = $('<label></label>');
  label.attr('for', checkboxId);
  label.html(title);

  listItem.append(checkbox);
  listItem.append(space);
  listItem.append(label);

  $("#songlist").append( listItem );
}

function submitSong(event) {
  event.preventDefault();
  var title = $("#new-song").val();
  createSong(title);
  $("#new-song").val(null);
}

function nextSongId() {
  return $(".song").length + 1;
}


function deleteSongs(event) {
  event.preventDefault();
  songs = $(".allsongs").val();
  delSongs(songs);
  $(".allsongs").remove();
}

function delSongs(songs) {
  artistId = $("#deleteartist").attr('href');
  $.ajax({
    type: "DELETE",
    url: artistId + "/songs/" + ".json",
    contentType: "application/json",
    dataType: "json"})

    .done(function(data) {
    });
}

$(document).ready(function() {
  $("form").bind('submit', submitSong);
  $("#deleteallsongs").bind('click', deleteSongs);
});
