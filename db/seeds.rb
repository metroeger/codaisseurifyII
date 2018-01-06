# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Artist.destroy_all
Song.destroy_all

wild_belle = Artist.create!(name: "Wild Belle", photo: "http://lightning100.com/wp-content/uploads/2016/02/130624-Wild-Belle.jpg")
mishka = Artist.create!(name: "Mishka", photo: "http://cdn1.brandwiki.today/sites/14/2016/01/Mishka_2.jpg")
nina_simone = Artist.create!(name: "Nina Simone", photo: "https://cdn-img.essence.com/sites/default/files/styles/3x2_lg/public/images/2016/03/14/nina-simone-gettyimages-74314643_master.jpg?itok=4oL0H84Q")
rem = Artist.create!(name: "R.E.M.", photo: "http://blastecho.com/wp-content/uploads/2016/06/rem_1992.jpg")
manu_chao = Artist.create!(name: "Manu Chao", photo: "https://houselistbowerypresents.ticketfly.com/files/2011/09/9134_manu-chao-500x375.jpg")
portugal_the_man = Artist.create!(name: "Portugal, the man", photo: "http://www.themarooncafe.com/wp-content/uploads/2015/06/Portugal-The-Man1.jpg")

song1 = Song.create!(title: "Feeling good", artist: nina_simone)
song2 = Song.create!(title: "Sinnerman", artist: nina_simone)
song3 = Song.create!(title: "Mississippi Goddam", artist: nina_simone)
song4 = Song.create!(title: "I put a spell on you", artist: nina_simone)
song5 = Song.create!(title: "Ain't got no", artist: nina_simone)

song6 = Song.create!(title: "Desaparecido", artist: manu_chao)
song7 = Song.create!(title: "Me gustas tu", artist: manu_chao)
song8 = Song.create!(title: "Me llaman calle", artist: manu_chao)
song9 = Song.create!(title: "Clandestino", artist: manu_chao)
song10 = Song.create!(title: "Welcome to Tijuana", artist: manu_chao)

song11 = Song.create!(title: "Love like this", artist: wild_belle)
song12 = Song.create!(title: "Backslider", artist: wild_belle)
song13 = Song.create!(title: "It's too late", artist: wild_belle)
song14 = Song.create!(title: "June", artist: wild_belle)
song15 = Song.create!(title: "I'm in love", artist: wild_belle)
song16 = Song.create!(title: "Coyotes", artist: wild_belle)

song17 = Song.create!(title: "Coastline journey", artist: mishka)
song18 = Song.create!(title: "3rd eye vision", artist: mishka)
song19 = Song.create!(title: "Ocean is my potion", artist: mishka)
song20 = Song.create!(title: "Above the bones", artist: mishka)
song21 = Song.create!(title: "Keep on loving", artist: mishka)

song22 = Song.create!(title: "The one I love", artist: rem)
song23 = Song.create!(title: "Loosing my religion", artist: rem)
song24 = Song.create!(title: "Happy people", artist: rem)

song25 = Song.create!(title: "Feel it still", artist: portugal_the_man)
