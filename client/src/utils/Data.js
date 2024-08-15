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
      "https://m.media-amazon.com/images/M/MV5BMTkwNmM3ZWMtNDY1Ni00YmFhLTg2ZTgtZmE3NTBmOGUwOTUyXkEyXkFqcGdeQXVyOTI3MzI4MzA@.300_.jpg",
    releaseDate: "May 1, 2024",
    title: "Heeramandi: The Diamond Bazaar",
    trailerLength: "3:02",
    videoLink: "https://www.imdb.com//title/tt15204292/?ref_=vi_tr_tr_tt_21",
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
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BYWRkZjJiODEtM2IwZi00ZjM1LWEyOTUtOThjMDk3YThjZDUzXkEyXkFqcGdeQXVyMTUzMTg2ODkz.300_.jpg",
    releaseDate: "March 16, 2024",
    title: "The Idea of You",
    trailerLength: "5:40",
    videoLink:
      "https://www.imdb.com/title/tt9466114/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_the%2520idea%2520",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BZWIzN2FhN2ItNTYxMC00M2Q3LThiNGMtOWRjYjE5MDY4MjFiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@.300_.jpg",
    releaseDate: "May 9 2024",
    title: "Mother of the Bride",
    trailerLength: "2:10",
    videoLink:
      "https://www.imdb.com/title/tt26926267/?ref_=nv_sr_srsg_0_tt_6_nm_2_q_mother%2520of%2520the%2520bride",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BMjA5ZjA3ZjMtMzg2ZC00ZDc4LTk3MTctYTE1ZTUzZDIzMjQyXkEyXkFqcGdeQXVyMTM1NjM2ODg1.300_.jpg",
    releaseDate: "March 12, 2024",
    title: "The Fall Guy",
    trailerLength: "3:02",
    videoLink:
      "https://www.imdb.com/title/tt1684562/?ref_=nv_sr_srsg_0_tt_7_nm_1_q_The%2520Fall%2520Guy",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BY2JlYjlkNzMtNTU3OS00NDVmLTk4NTYtYTM4ZTEwMGM4NDBiXkEyXkFqcGdeQXVyMTUzMTg2ODkz.300_.jpg",
    releaseDate: "April 7, 2024",
    title: "Abigail",
    trailerLength: "1:13",
    videoLink:
      "https://www.imdb.com/title/tt27489557/?ref_=nv_sr_srsg_0_tt_2_nm_6_q_Abigail",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BM2I4MDE3NTktZGI5Ny00MzcyLTk0NjItNmJiNDk3NDkzYzU1XkEyXkFqcGdeQXVyMDM2NDM2MQ@@.300_.jpg",
    releaseDate: "November 24, 2024",
    title: "Wicked",
    trailerLength: "3:33",
    videoLink:
      "https://www.imdb.com/title/tt1262426/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_Wicked",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BZjIyOTBmNzEtY2YxNC00YzgyLTgxZGYtOWM4NTYwNmZkNzA1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@.300_.jpg",
    releaseDate: "3 May 2024",
    title: "Unfrosted",
    trailerLength: "2:12",
    videoLink:
      "https://www.imdb.com/title/tt14914430/?ref_=nv_sr_srsg_0_tt_6_nm_2_q_Unfrosted",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BOGE5NjllZTEtMGJjNy00ZTFmLThlNDItNmNiZTgyOTQ4OTA2XkEyXkFqcGdeQXVyMTUzMTg2ODkz.300_.jpg",
    releaseDate: "December 22, 2023",
    title: "The Iron Claw",
    trailerLength: "2:22",
    videoLink:
      "https://www.imdb.com/title/tt21064584/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_The%2520Iron%2520Claw",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BYWJkY2Q4NmYtOGRlMi00YTg5LWE2ZmQtY2NkYzk3YTRmNWZlXkEyXkFqcGdeQXVyMTY3ODkyNDkz.300_.jpg",
    releaseDate: "February 14, 2024",
    title: "Madame Web",
    trailerLength: "3:03",
    videoLink:
      "https://www.imdb.com/title/tt11057302/?ref_=nv_sr_srsg_0_tt_6_nm_2_q_Madame%2520Web",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BYTYyODhlODktYjUzNC00NjUyLWI1MzYtNmI0MTY3YTUxYjY2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@.300_.jpg",
    releaseDate: "November 24, 2024",
    title: "Civil War",
    trailerLength: "1:24",
    videoLink:
      "https://www.imdb.com/title/tt17279496/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_Civil%2520War",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BZTc3YmEwYTgtM2E1YS00NGQ1LTg1NzYtNTMxMzA5ODFhZThhXkEyXkFqcGdeQXVyNzAwMjU2MTY@.300_.jpg",
    releaseDate: "July 19, 2024",
    title: "Twisters",
    trailerLength: "3:07",
    videoLink:
      "https://www.imdb.com/title/tt12584954/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_Twisters",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BOTVhZGU2OWQtNDM1Ni00MzM3LTgzYjgtOTEwYzQzOWZjNTIyXkEyXkFqcGdeQXVyMTcwOTQzOTYy.300_.jpg",
    releaseDate: "March 15, 2024",
    title: "Dune: Part Two",
    trailerLength: "0:31",
    videoLink:
      "https://www.imdb.com/title/tt15239678/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_Dune%253A%2520Part%2520Two",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BN2QyZGU4ZDctOWMzMy00NTc5LThlOGQtODhmNDI1NmY5YzAwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@.300_.jpg",
    releaseDate: "December 15, 2023",
    title: "Anyone But You",
    trailerLength: "2:34",
    videoLink:
      "https://www.imdb.com/title/tt26047818/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_Anyone%2520But%2520You",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BYjQ5OTI3MWYtN2NkZC00MzE3LWE1NGItZjI0ZjFiZTIzOWFkXkEyXkFqcGdeQXVyMTA2MDU0NjM5.300_.jpg",
    releaseDate: "October 25, 2024",
    title: "Back to Black",
    trailerLength: "0:31",
    videoLink:
      "https://www.imdb.com/title/tt21261712/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_Back%2520to%2520Black",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@.300_.jpg",
    releaseDate: "May 15, 2015",
    title: "Mad Max: Fury Road",
    trailerLength: "2:29",
    videoLink:
      "https://www.imdb.com/title/tt1392190/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_Mad%2520Max%253A%2520Fury%2520Road",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BOTI5MjNjMTMtN2NiNC00YjBlLTgzMWQtMGRhZDZkYmY1NGU2XkEyXkFqcGdeQXVyNTgyNTA4MjM@.300_.jpg",
    releaseDate: "June 23, 2023",
    title: "Godzilla Minus One",
    trailerLength: "2:00",
    videoLink:
      "https://www.imdb.com/title/tt23289160/?ref_=nv_sr_srsg_0_tt_1_nm_0_q_Godzilla%2520Minus%2520One",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BMTcwOWE3NjUtYTJhNy00ZDdjLWJiMGItMzQ0ODQ1NmQ2ZmRkXkEyXkFqcGdeQXVyMTQ2Mzc5OTIz.300_.jpg",
    releaseDate: "August 7, 2024",
    title: "It Ends with Us",
    trailerLength: "2:26",
    videoLink:
      "https://www.imdb.com/title/tt10655524/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_It%2520Ends%2520with%2520Us",
  },
];

const movies = [
  {
    bgimage: "https://images8.alphacoders.com/134/1344546.jpeg",
    image:
      "https://res.cloudinary.com/dtwoxusxz/image/upload/v1723721697/kung_fu_panda_4_ce5yfi.jpg",
    trailer: "_inKs4eeHiI",
    trailerLength: "2:27",
    title: "Kung Fu Panda 4",
    year: "2024",
    moviecode: "tt21692408",
    movielength: "1h 34m",
    description:
      "Po, the beloved dragon warrior, faces a new challenge when a powerful villain threatens the peace of the Valley of Peace, leading him on an epic journey of self-discovery and kung fu mastery. Horror / Thriller",
  },
  {
    bgimage:
      "https://res.cloudinary.com/dtwoxusxz/image/upload/v1723722006/bladerunner_gtdnur.jpg",
    image:
      "https://res.cloudinary.com/dtwoxusxz/image/upload/v1723722006/blade_zneg9e.jpg",
    trailer: "gCcx85zbxz4",
    trailerLength: "2:22",
    title: "Blade Runner 2049",
    year: "2017",
    movielength: "2h 43m",
    moviecode: "tt1856101",
    description:
      "In a future where humans and intelligent apes coexist precariously, young leader Nova must navigate rising tensions to prevent a catastrophic war. Action | Sci-Fi",
  },
  {
    bgimage:
      "https://res.cloudinary.com/dtwoxusxz/image/upload/v1723722009/terminatorbgimage_w3ukfs.jpg",
    image:
      "https://res.cloudinary.com/dtwoxusxz/image/upload/v1723722007/terminator_j0qtmb.jpg",
    trailer: "jNU_jrPxs-0",
    trailerLength: "2:31",
    title: "Terminator Genisys",
    year: "2015",
    moviecode: "tt1340138",
    movielength: "2h 6m",
    description:
      "A cyborg assassin targets the mother of a future resistance leader, triggering a race against time as a soldier from the future is deployed to protect her. Action | Adventure | Sci-Fi",
  },
  {
    bgimage:
      "https://res.cloudinary.com/dtwoxusxz/image/upload/v1723722008/dunebgimage_gi2awv.jpg",
    image:
      "https://res.cloudinary.com/dtwoxusxz/image/upload/v1723722006/dune_wbxi7x.jpg",
    trailer: "n9xhJrPXop4",
    trailerLength: "3:05",
    title: "Dune",
    year: "2021",
    moviecode: "tt1160419",
    movielength: "2h 35m",
    description:
      "In a future of scarce resources, a young noble navigates political intrigue and desert perils to safeguard his family legacy. Action | Adventure | Drama",
  },
];

export { moviesData, movies };
