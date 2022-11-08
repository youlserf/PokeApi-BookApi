import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Box,
  Typography,
  Grid,
  Modal,
} from "@mui/material";

import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 40,
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const CardPokemons = ({ pokemons }) => {
  const [isHover, setIsHover] = useState(false);
  const [open, setOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const boxStyle = {
    backgroundColor: isHover ? "lightblue" : "rgb(0, 191, 255)",
  };

  const generarNuevoColor = () => {
    let simbolos, color;
    simbolos = "0123456789ABCDEF";
    color = "#";

    for (var i = 0; i < 6; i++) {
      color = color + simbolos[Math.floor(Math.random() * 16)];
    }

    return color;
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Box
      sx={{
        boxStyle,
        bgcolor: `${generarNuevoColor()}`,
        borderRadius: "2%",
      }}
    >
      <Grid
        container
        spacing={3}
        mt={3}
        sx={{
          borderRadius: "20%",
          bgcolor: `${generarNuevoColor()}`,
        }}
      >
        {pokemons.length > 0 &&
          pokemons.map(({ pokemon }) => (
            <Grid
              item
              xs={12}
              sm={4}
              sx={{
                borderRadius: "40%",
                bgcolor: `${generarNuevoColor()}`,
              }}
            >
              <Card
                sx={{
                  boxStyle,
                  bgcolor: `${generarNuevoColor()}`,
                  width: "326px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  borderBottom: "1px solid rgba(153, 153, 153, 0.383)",
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: "200px",
                    height: "200px",
                    border: "5px solid white",
                    borderRadius: "40%",

                    backgroundColor: "white",
                  }}
                  image={`http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                    pokemon.url.split("/")[6]
                  }.svg`}
                />
                <CardContent>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "var(--dark-gray)",
                      fontSize: "2rem",
                      marginTop: 0,
                      marginBottom: "2rem",
                    }}
                  >
                    {pokemon.name}
                  </Typography>
                  <Button
                    sx={{
                      color: "var(--white-red)",
                      fontSize: "2rem",
                      marginTop: 0,
                      marginBottom: "2rem",
                    }}
                    onClick={handleOpen}
                  >
                    Ver detalle
                  </Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        {pokemon.name}
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {pokemon.url}
                      </Typography>
                    </Box>
                  </Modal>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default CardPokemons;
