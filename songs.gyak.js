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



$(document).on('click', "a#deletesong", function(){

  var id = $("#deleteart").attr('href');
  var button = this;
  var songid = $(button).parent().attr('id');
  if(confirm("Are you sure?")){
    $.ajax({
      type: "DELETE",
      url: id + "/songs/" + songid + ".json",
      contentType: "application/json",
      dataType: "json"})

      $(button).parent().remove();
    }
});

<h4><%= @artist.name %></h4>
 <a> <%= link_to "Delete artist", artist_path(@artist.id),
 method: :delete, data: { confirm: "Are you sure?"}, class: "btn btn-info", id:"deleteart" %></a>

<div class="panel-body">
 <ol id="songslist">
   <% if @songs!= nil %>
   <% @songs.each do |song| %>
   <li id = "<%= song.id %>"><%= song.name %>
   </br>
   <%= link_to "Play", song.link, target: :_blank %>
   <a href="#" id= "deletesong">  Delete</a>
</li>
   <% end %>
   <% end %>
 </ol>
</div>
</div>

<%= render "songs/form" %>
<br />
<a href="#" id= "deleteallsongs"> Delete All Songs</a>


event.preventDefault();
  $("button").click(function(){
      $("#deletesong").parent().remove();


      function deleteSong(event) {
        var artistId = $("#deleteartist").attr('href');
        var linkDelSong = $("#deletesong").attr("href");
        var button = this;
        var songID = $(button).parent().attr("id");
        if(confirm()){
          $.ajax({
            type: "DELETE",
            url: artistId + "/songs/" + songid + ".json",
            contentType: "application/json",
            dataType: "json"})

              $(button).parent().remove();
          })
        }



  function deleteSong(songId) {
  var artistShowId = $('#artist-id');
  var artistId = artistShowId.data('id');

  $.ajax({
    type: "DELETE",
    url: "/artists/" + artistId + "/songs/" + songId + ".json",
    contentType: "application/json",
    dataType: "json"})

}

function submitDelete(event) {
  event.preventDefault();
  songId = $(this).parent().data('id')
  $(this).parent().remove()
  deleteSong(songId);
}

function deleteSonglist(delList){
  var artistId = $("#deleteartist").attr('href');
