
function submitSong(event) {
  // stop the form from doing the default action, submitting...
  event.preventDefault();
  var title = $("#new-song").val();
  createSong(title);
  $("#new-song").val(null);
}

function createSong(title) {
  var checkboxId = "song-" + nextSongId();

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

function nextSongId() {
  return $(".song").length + 1;
}

function cleanUpSongs() {
  var list = document.getElementById("songlist");
  var items = document.getElementsByClassName("song");
    list.remove(items);
  }


$(document).ready(function() {
  $("form").bind('submit', submitSong);
  $("#clean-up").bind('click', cleanUpSongs);
});
