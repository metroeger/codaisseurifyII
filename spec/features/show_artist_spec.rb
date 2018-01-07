require 'rails_helper'

describe "Viewing an artist" do
  let(:artist) { create :artist }

  it "shows the artist's details" do
    visit artist_url(artist)

    expect(page).to have_text(song.title)
  end
end
