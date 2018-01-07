require 'rails_helper'

describe "Artist viewing the list of songs" do

  let(:artist) { create :artist, name: "nina" }
  let(:another_artist) { create :artist, name: "x" }

  let!(:song1) { create :song, title: "title 1", artist: artist }
  let!(:song2) { create :song, title: "title 2", artist: artist }
  let!(:song3) { create :song, title: "not his", artist: another_artist }

  it "shows all his songs" do
    visit artist_url

    expect(page).to have_text("title 1")
    expect(page).to have_text("title 2")
  end

  it "does not show other artist songs" do
    visit artist_url(artist)

    expect(page).not_to have_text("not his")
  end
end
