import { Grid } from "@mantine/core";
import { GameCard } from "card"

const games = [
  {
    title: "Control",
    image: "https://images.alphacoders.com/110/1108506.jpg"
  },
  {
    title: "God of War: Ragnarök ",
    image: "https://beanstalk.io/wp-content/uploads/2022/11/1173124.jpg"
  },
  {
    title: "Horizon Forbidden West",
    image: "https://images6.alphacoders.com/108/thumb-1920-1082417.jpg"
  },
  {
    title: "Assassin's Creed Mirage",
    image: "https://c4.wallpaperflare.com/wallpaper/256/9/214/assassin-s-creed-mirage-assassin-s-creed-games-posters-hd-wallpaper-preview.jpg"
  },
  {
    title: "Returnal",
    image: "https://images.alphacoders.com/113/thumb-1920-1137684.jpg"
  },
  {
    title: "Ghost Of Tsushima",
    image: "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2020/07/Ghost-of-Tsushima-Title-Image.jpg"
  },
  {
    title: "The Last of Us Part II",
    image: "https://images6.alphacoders.com/788/788051.jpg"
  },
  {
    title: "Anthem",
    image: "https://wallpapers.com/images/featured/0uqu7lgua8g8c4yx.jpg"
  },
  {
    title: "Tomb Raider",
    image: "https://wallpaperaccess.com/full/349972.jpg"
  },
  {
    title: "Red Dead Redemption 2",
    image: "https://wallpapers.com/images/hd4/arthur-morgan-red-dead-redemption-2-4k-hd-games-4k-wallpaper-iwuzo4l3gjd8kclf.jpg"
  },
];

const GamesContent = () => {
  return (
    <Grid
      sx={{
        gap: "1rem"
      }}
    >
      {games.map(game => (
        <GameCard {...game} key={game.title} showAddButton />
      ))}
    </Grid>
  )
} 

export default GamesContent