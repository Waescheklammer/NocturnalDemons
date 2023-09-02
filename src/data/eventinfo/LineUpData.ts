import { LineUp } from "../types/LineUp";

export const lineUpData: LineUp = {
  headliners: ["Cockroach", "PRDK", "BEAST:FREQNZ", "Bounty 3000", "DARK VISION"],
  stages: [
    {
      name: "Neurofunk",
      acts: [
        {
          name: "Aven",
          time: "22:00",
          genre: "Neurofunk DnB",
        },
        {
          name: "DIZZYDOSE B2B TERRIFYING",
          time: "23:00",
          genre: "Neurofunk DnB",
        },
        {
          name: "Cockroach",
          time: "00:00",
          genre: "Neurofunk DnB",
        },
        {
          name: "PRDK",
          time: "01:00",
          genre: "Neurofunk DnB",
        },
        {
          name: "BEAST:FREQNZ",
          time: "02:00",
          genre: "Neurofunk DnB",
        },
        {
          name: "B-HAT",
          time: "03:00",
          genre: "Neurofunk DnB",
        },
        {
          name: "TOTO b2b MARKO",
          time: "04:00",
          genre: "Neurofunk DnB",
        },
        {
          name: "KEON",
          time: "05:00",
          genre: "Neurofunk DnB",
        },
        {
          name: "Dropz",
          time: "06:00",
          genre: "Neurofunk DnB",
        },
      ],
      timetable: "/images/artists/neuro.webp",
    },
    {
      name: "Techno",
      acts: [
        {
          name : "Zeremonienmeister",
          time: "22:00",
          genre: "Techno"
        },
        {
          name : "DARK VISION",
          time: "23:00",
          genre: "Techno"
        },
        {
          name : "YANA",
          time: "01:00",
          genre: "Techno"
        },
        {
          name : "Bounty 3000",
          time: "02:00",
          genre: "Techno"
        },
        {
          name : "DO NOT DISTURB",
          time: "03:00",
          genre: "Techno"
        },
        {
          name : "Schwizzynator",
          time: "05:00",
          genre: "Techno"
        }
      ],
      timetable: "http://localhost:3000/images/artists/techno.webp",
    },
    {
      name: "Mixed",
      acts: [
        {
          name: "DO:IT",
          time: "22:00",
          genre: "DnB"
        },
        {
          name: "J-COP",
          time: "23:30",
          genre: "DnB",
        },
        {
          name: "DYS:KO",
          time: "01:00",
          genre: "DnB"
        },
        {
          name: "AUBI",
          time: "02:30",
          genre: "DnB",
        },
        {
          name: "Hefty Mess Showcase",
          time: "04:00",
          genre: "DnB",
        }
      ],
      timetable: "/images/artists/mixed.webp",
    }
  ],
};
