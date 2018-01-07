require 'rails_helper'

RSpec.describe Artist, type: :model do

  describe "validations" do

    it "is invalid without a name" do
      artist = Artist.new(name: "")
      artist.valid?
      expect(artist.errors).to have_key(:name)
    end

    it "is invalid without a photo" do
      artist = Artist.new(photo: nil)
      artist.valid?
      expect(artist.errors).to have_key(:photo)
    end
  end

    describe "association with song" do
      let(:artist) { create :artist }
      let!(:song) { create :song, artist: artist }

      it "has many songs" do
    song1 = artist.songs.new(title: "Nina")
    expect(artist.songs).to include(song1)
  end

    it "deletes associated songs" do
        expect { artist.destroy }.to change(Song, :count)
    end
  end
end
