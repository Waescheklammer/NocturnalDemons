import { EventInfo } from "../types/EventInfo";

export const events: EventInfo = {
  name: "APOCALYPSE",
  locationShort: "Nostromo Görlitz",
  locationFull: "Nostromo Görlitz",
  address: "Cottbuser Str. 21, 02826 Görlitz",
  date: "20.09.25",
  timeStart: "22:00",
  timeEnd: "05:00",
  genre: "Drum n Bass | Techno",
  ticketLink: "https://eventfrog.de/de/p/party/electro/nocturnal-demons-apocalypse-7355667685353457674.html",
  mapLink:
    "https://www.google.de/maps/place/NOSTROMO+(Schall+%26+Rauch+e.V.)/@51.1543368,14.9693562,453m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4708dc2d5356eabb:0xe2a464ea5f708e9a!8m2!3d51.1543368!4d14.9719311!16s%2Fg%2F11bwfm6_62?entry=ttu",
  imgPromo: process.env.PUBLIC_URL + "/images/logo/apocalypse.webp",
  imgCover: process.env.PUBLIC_URL + "/images/logo/apocalypse.webp",
};
