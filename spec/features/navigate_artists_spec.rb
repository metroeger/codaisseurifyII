require 'rails_helper'

describe "Navigating artist" do

  let(:artist) { create :artist }
  let!(:song) { create :song , artist: artist }

  it "allows navigation from the index page to the listing page" do
    visit artist_url(artist)

    click_link "Back"

    expect(current_path).to eq(rooth_path)
  end
end
