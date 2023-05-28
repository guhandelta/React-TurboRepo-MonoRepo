import { Box, Title, Grid } from "@mantine/core";

import { useStore } from 'store'
import { GameCard } from 'card'

export const Playlist = () => {

  const { games } = useStore();

  return (
    <>
      <Box>
        <Title>Viewing List</Title>
      </Box>
      <Grid
        mt={20}
        sx={{
          gap: "1rem"
        }}
      >
        {games.map(game =>(
          <GameCard {...game} key={game.title} />
        ))}
      </Grid>
    </>
  )
}
