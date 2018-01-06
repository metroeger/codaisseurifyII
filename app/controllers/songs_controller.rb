class SongsController < ApplicationController
      before_action :set_artist
      before_action :set_song

  def new
    @song = Song.new
  end

  def create
  @artist = Artist.find(params[:artist_id])
  @song = @artist.songs.new(song_params)
  @song.artist_id = params[:artist_id]

  respond_to do |format|
    if @song.save
      format.html { redirect_to @song.artist, notice: "Song has been created" }
      format.json { render :show, status: :created, location: @song }
    else
      format.html { render :new }
      format.json { render json: @song.errors, status: :unprocessable_entity }
    end
  end
end

  def destroy
    @song.destroy
    respond_to do |format|
    format.html { redirect_to @song.artist, notice: "Song deleted" }
    format.json { head :no_content }
  end
end

end

  private

    def set_song
    @song = Song.find_by_id(params[:id])
    end

    def song_params
    params.require(:song).permit(:title, :artist_id)
    end

    def set_artist
    @artist = Artist.find_by_id(params[:id])
    end
