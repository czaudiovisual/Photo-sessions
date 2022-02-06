puts "seeds deleted ❌❌❌"

# User.destroy_all
Booking.destroy_all

# User.create(id: 1, name: 'Christian', img_profile: "https://www.czaudiovisual.com/img/about.jpg", username: "christian@hello.com", password_digest: "password")

Booking.create(id: 1, user_id: 1, style: "Portrait", time: "4:00pm", date: "01/25/2022", location: "Wynwood, Miami", img_url: "https://c0.wallpaperflare.com/preview/777/644/978/miami-united-states-wynwood-sunset.jpg", description: "Portraits at the Wynwood walls grafittis")
Booking.create(id: 2, user_id: 1, style: "Streetstyle", time: "3:00pm", date: "01/26/2022", location: "Design Destrict, Miami", img_url: "https://assets.vogue.com/photos/6061f47202e3a8425601f877/1:1/w_2000,h_2000,c_limit/Brooklyn-StreetStyle-Vogue-MJJ_2439.jpg", description: "Street photo session near the boutiques")
Booking.create(id: 3, user_id: 1, style: "Wedding", time: "6:00pm", date: "01/27/2022", location: "Miami Beach, FL", img_url: "https://www.brides.com/thmb/1i0eyK74CRNApdASzXdE1KHSElA=/1024x1536/filters:fill(auto,1)/nicole-and-hans-wedding-ana-and-jerome-13-d91575adc7d44454a733ecc3f8f2ef30.jpg", description: "Wedding photos at the Beach")
Booking.create(id: 4, user_id: 1, style: "Event", time: "9:00pm", date: "01/28/2022", location: "Fort Laudardale, FL", img_url: "https://assets.simpleviewcms.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/ftlauderdale/AJR_Booze_Garden_0330_16b9ad65-88e1-430c-bc55-786fd9be8f72.jpg", description: "Take photos at all different spaces and groups at the event")

puts "seeding done ✅✅✅"