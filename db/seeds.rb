puts "seeds deleted ❌❌❌"

# User.destroy_all
Booking.destroy_all

# User.create(id: 1, name: 'Christian', img_profile: "https://www.czaudiovisual.com/img/about.jpg", username: "christian@hello.com", password_digest: "password")

Booking.create(id: 1, user_id: 1, style: "Portrait", time: "4:00pm", date: "01/25/2022", location: "Wynwood, Miami", img_url: "https://c0.wallpaperflare.com/preview/777/644/978/miami-united-states-wynwood-sunset.jpg", description: "Portraits at the Wynwood walls grafittis")
Booking.create(id: 2, user_id: 1, style: "Streetstyle", time: "3:00pm", date: "01/26/2022", location: "Design Destrict, Miami", img_url: "https://assets.vogue.com/photos/6061f47202e3a8425601f877/1:1/w_2000,h_2000,c_limit/Brooklyn-StreetStyle-Vogue-MJJ_2439.jpg", description: "Street photo session near the boutiques")

puts "seeding done ✅✅✅"