export const dummyData = {
  games: [
    {
      id: "1",
      title: "The Legend of Zelda: Breath of the Wild",
      platform: ["Nintendo Switch"],
    },
    {
      id: "2",
      title: "Red Dead Redemption 2",
      platform: ["PlayStation 4", "Xbox One"],
    },
    {
      id: "3",
      title: "Fortnite",
      platform: ["PC", "PlayStation 5", "Xbox Series X"],
    },
  ],
  reviews: [
    {
      id: "1",
      rating: "4.5",
      content: "A fantastic open-world adventure!",
      author_id: "1",
      game_id: "1",
    },
    {
      id: "2",
      rating: "5.0",
      content: "An epic tale of the wild west.",
      author_id: "2",
      game_id: "2",
    },
    {
      id: "3",
      rating: "3.8",
      content: "Endless fun with friends in a battle royale setting.",
      author_id: "3",
      game_id: "3",
    },
  ],
  authors: [
    { id: "1", name: "John Doe", verified: true },
    { id: "2", name: "Jane Smith", verified: false },
    { id: "3", name: "Bob Johnson", verified: true },
  ],
};

export default dummyData;
