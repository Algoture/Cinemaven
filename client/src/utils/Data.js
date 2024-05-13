const moviesData = [
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BN2E3ODBlNWYtODQ1OS00MTM5LWExZmMtYmEzZjc4NDJkZTI0XkEyXkFqcGdeQXVyMDM2NDM2MQ@@.300_.jpg",
    releaseDate: "August 9, 2024",
    title: "Trap",
    trailerLength: "2:46",
    videoLink: "https://www.imdb.com//title/tt26753003/?ref_=vi_tr_tr_tt_0",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BNzQ3NDhmZjMtYjQ4ZS00MmFhLTliOGMtZmQ0MWQ3ZDA3MjZhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@.300_.jpg",
    releaseDate: "September 20, 2024",
    title: "Transformers One",
    trailerLength: "3:02",
    videoLink: "https://www.imdb.com//title/tt8864596/?ref_=vi_tr_tr_tt_1",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BZGI4NTEwNTAtZDcwMi00MDkxLTg1OGYtNTZmMzE3ZDljNzVlXkEyXkFqcGdeQXVyMTEyMjM2NDc2.300_.jpg",
    releaseDate: "May 10, 2024",
    title: "Kingdom of the Planet of the Apes",
    trailerLength: "1:01",
    videoLink: "https://www.imdb.com//title/tt11389872/?ref_=vi_tr_tr_tt_2",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BNTI0MjIwMDAtYWY1ZC00MDUyLWI0MzMtZGNjODRlN2Y3ZmE2XkEyXkFqcGdeQXVyMTM1NjM2ODg1.300_.jpg",
    releaseDate: "October 4, 2024",
    title: "Joker: Folie à Deux",
    trailerLength: "2:25",
    videoLink: "https://www.imdb.com//title/tt11315808/?ref_=vi_tr_tr_tt_3",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BNGZjYzE4M2MtNmE5ZC00MjdkLThmYTAtNTAyNjQyN2Q4YmVlXkEyXkFqcGdeQXVyMDM2NDM2MQ@@.300_.jpg",
    releaseDate: "July 26, 2024",
    title: "Deadpool & Wolverine",
    trailerLength: "2:26",
    videoLink: "https://www.imdb.com//title/tt6263850/?ref_=vi_tr_tr_tt_4",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BMzE0NTdkNWMtZDVkMS00ZmIxLWE5OGEtN2ZhYTdlNWE2ZjVmXkEyXkFqcGdeQXVyMTUzMTg2ODkz.300_.jpg",
    releaseDate: "",
    title: "One Hundred Years of Solitude",
    trailerLength: "1:19",
    videoLink: "https://www.imdb.com//title/tt9892936/?ref_=vi_tr_tr_tt_5",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BOTE5ZTY3NzktYmVkNS00NzRhLWI3YzUtNTA3MDVkYmIzMGVmXkEyXkFqcGdeQXVyMjYwNDA2MDE@.300_.jpg",
    releaseDate: "June 14, 2024",
    title: "The Watchers",
    trailerLength: "2:10",
    videoLink: "https://www.imdb.com//title/tt26736843/?ref_=vi_tr_tr_tt_6",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BNDc1NzIzODktZGQxNC00MjUwLTk3YzQtZGEzZjVhYmYxMDBkXkEyXkFqcGdeQXVyMTEyMjM2NDc2.300_.jpg",
    releaseDate: "July 5, 2024",
    title: "MaXXXine",
    trailerLength: "2:22",
    videoLink: "https://www.imdb.com//title/tt22048412/?ref_=vi_tr_tr_tt_7",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BZTYzNGIzNDItMjQ5Yy00NmNiLWI4YTQtNzVjYzBjZDEzNDdjXkEyXkFqcGdeQXVyMjQ4ODcxNTM@.300_.jpg",
    releaseDate: "May 8, 2024",
    title: "Dark Matter",
    trailerLength: "2:33",
    videoLink: "https://www.imdb.com//title/tt19231492/?ref_=vi_tr_tr_tt_8",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BYWI1YzdlZTUtNzExYi00MmYxLTg5OWUtNzhkMDhhOWMwM2Y5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@.300_.jpg",
    releaseDate: "August 16, 2024",
    title: "Alien: Romulus",
    trailerLength: "1:03",
    videoLink: "https://www.imdb.com//title/tt18412256/?ref_=vi_tr_tr_tt_9",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BYTc1MDQ3NjAtOWEzMi00YzE1LWI2OWUtNjQ0OWJkMzI3MDhmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@.300_.jpg",
    releaseDate: "June 14, 2024",
    title: "Inside Out 2",
    trailerLength: "2:26",
    videoLink: "https://www.imdb.com//title/tt22022452/?ref_=vi_tr_tr_tt_10",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BM2Q0ZmFjNjQtM2U4OC00YWViLWFhYTUtMmMwNmI2MDEwNmJmXkEyXkFqcGdeQXVyMjM4NTM5NDY@.300_.jpg",
    releaseDate: "April 26, 2024",
    title: "Unsung Hero",
    trailerLength: "2:11",
    videoLink: "https://www.imdb.com//title/tt23638614/?ref_=vi_tr_tr_tt_11",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BYzhmZmM2NTUtYmNmMC00N2U3LWIwNjQtMTc0ZTRkNTU3ZjFjXkEyXkFqcGdeQXVyNjcwMzExMzU@.300_.jpg",
    releaseDate: "April 21, 2024",
    title: "Red Eye",
    trailerLength: "0:31",
    videoLink: "https://www.imdb.com//title/tt23897504/?ref_=vi_tr_tr_tt_12",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BYTk2YjE4MjgtYWEzYy00NzY3LTk4MzktZTNhZjlhOTJhNDZjXkEyXkFqcGdeQXVyMjQwMDg0Ng@@.300_.jpg",
    releaseDate: "September 6, 2024",
    title: "Beetlejuice Beetlejuice",
    trailerLength: "1:21",
    videoLink: "https://www.imdb.com//title/tt2049403/?ref_=vi_tr_tr_tt_13",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BMGI3YjY4OTUtMDU0ZC00ZTQ3LWI1ZDktMTgwNjA2MDVmYTMwXkEyXkFqcGdeQXVyMjExNTA5MTI@.300_.jpg",
    releaseDate: "May 2, 2024",
    title: "The Tattooist of Auschwitz",
    trailerLength: "1:56",
    videoLink: "https://www.imdb.com//title/tt9022422/?ref_=vi_tr_tr_tt_14",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BYTUzMmE0NjQtZGEzMi00ZWU3LWIzN2QtMzk5MGE0Nzg0MmE0XkEyXkFqcGdeQXVyMTEyMjM2NDc2.300_.jpg",
    releaseDate: "July 12, 2024",
    title: "Fly Me to the Moon",
    trailerLength: "2:25",
    videoLink: "https://www.imdb.com//title/tt1896747/?ref_=vi_tr_tr_tt_15",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BZWI1ZDAxOWYtNDlmNy00NTkzLTlhZDEtMTcwMmZjOTY2NjBjXkEyXkFqcGdeQXVyMDM2NDM2MQ@@.300_.jpg",
    releaseDate: "July 19, 2024",
    title: "Twisters",
    trailerLength: "2:00",
    videoLink: "https://www.imdb.com//title/tt12584954/?ref_=vi_tr_tr_tt_16",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BZmU0MmI2MmQtN2ZjZC00MjU4LWE3YTUtMWZhOWM3NDFjODg3XkEyXkFqcGdeQXVyMDM2NDM2MQ@@.300_.jpg",
    releaseDate: "June 7, 2024",
    title: "Bad Boys: Ride or Die",
    trailerLength: "2:55",
    videoLink: "https://www.imdb.com//title/tt4919268/?ref_=vi_tr_tr_tt_17",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BZmQ3MzIyMzAtYjczYy00ZTYxLWE4M2ItMGQyYmI0MWUzZjAzXkEyXkFqcGdeQXVyMTM1NjM2ODg1.300_.jpg",
    releaseDate: "May 9, 2024",
    title: "Maxton Hall - The World Between Us",
    trailerLength: "1:31",
    videoLink: "https://www.imdb.com//title/tt27792190/?ref_=vi_tr_tr_tt_18",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BNDc0NjgzNjItMDMwZS00YmE1LWEzZDgtMGQ5ZDk4MzllN2IzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@.300_.jpg",
    releaseDate: "July 3, 2024",
    title: "Despicable Me 4",
    trailerLength: "2:27",
    videoLink: "https://www.imdb.com//title/tt7510222/?ref_=vi_tr_tr_tt_19",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BNDZhYjM1NDctOGY1My00ZWE4LWI5NDktNDVlMDAxZjcwOTEwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@.300_.jpg",
    releaseDate: "June 28, 2024",
    title: "A Quiet Place: Day One",
    trailerLength: "1:39",
    videoLink: "https://www.imdb.com//title/tt13433802/?ref_=vi_tr_tr_tt_20",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BMTkwNmM3ZWMtNDY1Ni00YmFhLTg2ZTgtZmE3NTBmOGUwOTUyXkEyXkFqcGdeQXVyOTI3MzI4MzA@.300_.jpg",
    releaseDate: "May 1, 2024",
    title: "Heeramandi: The Diamond Bazaar",
    trailerLength: "3:02",
    videoLink: "https://www.imdb.com//title/tt15204292/?ref_=vi_tr_tr_tt_21",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BNDZhYjM1NDctOGY1My00ZWE4LWI5NDktNDVlMDAxZjcwOTEwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@.300_.jpg",
    releaseDate: "May 2, 2024",
    title: "A Man in Full",
    trailerLength: "1:47",
    videoLink: "https://www.imdb.com//title/tt15845610/?ref_=vi_tr_tr_tt_22",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BMzczZWJjYTgtM2UyMC00NDMzLWJhMzItYWRlOGI1YmNlZmViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@.300_.jpg",
    releaseDate: "November 27, 2024",
    title: "Wicked",
    trailerLength: "1:01",
    videoLink: "https://www.imdb.com//title/tt1262426/?ref_=vi_tr_tr_tt_23",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BZjk0NDU5ZWEtZTIzMC00ZmE1LTk0NGMtMWVjYjU3NjRhZWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@.300_.jpg",
    releaseDate: "July 3, 2024",
    title: "Beverly Hills Cop: Axel F",
    trailerLength: "1:17",
    videoLink: "https://www.imdb.com//title/tt3083016/?ref_=vi_tr_tr_tt_24",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BYjM0NTUxNmMtYmZmMS00OTMwLWI1MTItNGU1M2I2YTJjMTM4XkEyXkFqcGdeQXVyMDM2NDM2MQ@@.300_.jpg",
    releaseDate: "July 12, 2024",
    title: "Descendants: The Rise of Red",
    trailerLength: "1:21",
    videoLink: "https://www.imdb.com//title/tt20202136/?ref_=vi_tr_tr_tt_25",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BZGZmMWY0ODAtNGRmNS00NTg5LTlkNDktOTEyMTBiMWQ4ZWZiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@.300_.jpg",
    releaseDate: "May 9, 2024",
    title: "Bodkin",
    trailerLength: "2:21",
    videoLink: "https://www.imdb.com//title/tt21072112/?ref_=vi_tr_tr_tt_26",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BZTcxYTY1NTMtMGNhNS00NzgwLTlkMWUtNWZkZDAxOGM4YTU1XkEyXkFqcGdeQXVyMTk2OTAzNTI@.300_.jpg",
    releaseDate: "October 25, 2024",
    title: "Terrifier 3",
    trailerLength: "2:11",
    videoLink: "https://www.imdb.com//title/tt27911000/?ref_=vi_tr_tr_tt_27",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BNzg0OGUwM2UtOTJlNC00YjViLTgyN2QtNmQyYTE0NWNhZjA1XkEyXkFqcGdeQXVyMDM2NDM2MQ@@.300_.jpg",
    releaseDate: "September 20, 2024",
    title: "The Wild Robot",
    trailerLength: "2:24",
    videoLink: "https://www.imdb.com//title/tt29623480/?ref_=vi_tr_tr_tt_28",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BZDRlMmU2MGItMjRkZC00MDI0LWE4ZWItMzBjNDQ4MTNkOTA2XkEyXkFqcGdeQXVyMTUyNjc3NDQ4.300_.jpg",
    releaseDate: "",
    title: "The Penguin",
    trailerLength: "1:15",
    videoLink: "https://www.imdb.com//title/tt15435876/?ref_=vi_tr_tr_tt_29",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BNGZlNTFlOWMtMzUwNC00ZDdhLTk0MWUtOGZjYzFlOTBmNDdhXkEyXkFqcGdeQXVyMTUyNjIwMDEw.300_.jpg",
    releaseDate: "August 15, 2024",
    title: "Pushpa: The Rule - Part 2",
    trailerLength: "1:05",
    videoLink: "https://www.imdb.com//title/tt16539454/?ref_=vi_tr_tr_tt_30",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BMmQ4MDMzZjEtYWM1MC00OTcwLWJiNTYtOTMxNmQ4Y2ZmMmYzXkEyXkFqcGdeQXVyMTEzMTI1Mjk3.300_.jpg",
    releaseDate: "April 26, 2024",
    title: "Goodbye Earth",
    trailerLength: "2:14",
    videoLink: "https://www.imdb.com//title/tt17492848/?ref_=vi_tr_tr_tt_31",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BMmI4OWFkNmEtOTY0OS00Zjg3LWJjZjItMmViNDA1MTM3NTM0XkEyXkFqcGdeQXVyMTQ3Mzk2MDg4.300_.jpg",
    releaseDate: "",
    title: "Aranmanai 4",
    trailerLength: "2:35",
    videoLink: "https://www.imdb.com//title/tt26493971/?ref_=vi_tr_tr_tt_32",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BNzkwMzEzY2UtNTdkOS00YTIyLTgwNWEtZGRlZmMxYWFhMTM3XkEyXkFqcGdeQXVyMTc4MDI4MjE2.300_.jpg",
    releaseDate: "April 26, 2024",
    title: "Pavi Caretaker",
    trailerLength: "1:47",
    videoLink: "https://www.imdb.com//title/tt27369385/?ref_=vi_tr_tr_tt_33",
  },
];

const movies = [
  {
    bgimage: "https://images8.alphacoders.com/134/1344546.jpeg",
    image: "kung fu panda 4.jpg",
    trailer: "_inKs4eeHiI",
    title: "Kung Fu Panda 4",
    year: "2024",
    description:
      "Po, the beloved dragon warrior, faces a new challenge when a powerful villain threatens the peace of the Valley of Peace, leading him on an epic journey of self-discovery and kung fu mastery. Horror / Thriller",
  },
  {
    bgimage: "bladerunner.jpg",
    image: "blade.jpg",
    trailer: "gCcx85zbxz4",
    title: "Blade Runner 2049",
    year: "2017",
    description:
      "In a future where humans and intelligent apes coexist precariously, young leader Nova must navigate rising tensions to prevent a catastrophic war. Action | Sci-Fi",
  },
  {
    bgimage: "terminatorbgimage.jpg",
    image: "terminator.jpg",
    trailer: "jNU_jrPxs-0",
    title: "Terminator Genisys",
    year: "2015",
    description:
      "A cyborg assassin targets the mother of a future resistance leader, triggering a race against time as a soldier from the future is deployed to protect her. Action | Adventure | Sci-Fi",
  },
  {
    bgimage: "dunebgimage.jpg",
    image: "dune.jpg",
    trailer: "n9xhJrPXop4",
    title: "Dune",
    year: "2021",
    description:
      "In a future of scarce resources, a young noble navigates political intrigue and desert perils to safeguard his family legacy. Action | Adventure | Drama",
  },
];

export { moviesData, movies };
