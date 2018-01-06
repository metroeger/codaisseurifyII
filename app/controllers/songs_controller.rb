class SongsController < ApplicationController
      before_action :set_artist
end


  def new
    @song = Song.new
  end

  def create
    @artist = Artist.find(params[:artist_id])
    @song = @artist.songs.new(song_params)

    if @song.save
      redirect_to @song.artist, notice: "Song has been added to the list"

  end

  def destroy
    @song = @artist.song
    @song.destroy
    redirect_to @song.artist, notice: "Song has been deleted"
  end


private

  def set_artist
  @artist = Artist.find(params[:artist_id])
end

  def song_params
    params.require(:song).permit(:title, :artist_id)
  end
