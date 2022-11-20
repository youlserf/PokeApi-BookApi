import {
  Paper,
  Box,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";
const CardBook = ({ book }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        maxHeight: "40rem",
        minHeight: "25rem",
        padding: 1,
        backgroundColor: "black",
      }}
    >
      <CardMedia
        component="img"
        image={book.volumeInfo?.imageLinks?.thumbnail}
        sx={{
          maxHeight: 200,
          minHeight: 150,
          borderRadius: 3,
        }}
      />
      <CardContent>
        <Box
          sx={{
            backgroundColor: "#3CFF33",
            color: "black",
            padding: 1,
            borderRadius: 1,
          }}
        >
          <Grid container spacing={2} mt={1}>
            <Grid item xs={12} sm={12}>
              <Typography variant="h6">{book.volumeInfo.title}</Typography>
            </Grid>
            <Grid item xs={6} sm={6}>
              <Typography variant="h6">{book.volumeInfo.authors}</Typography>
            </Grid>
            <Grid item xs={6} sm={6}>
              <Typography variant="h6">
                {book.volumeInfo.publishedDate}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} sx={{ padding: 2 }}>
              <Typography
                variant="h6"
                sx={{
                  border: "1px solid #333333",
                  width: "100%",
                  minHeight: "10rem",
                  maxHeight: "12rem",
                  padding: 1,
                  overflow: "hidden",
                  marginBottom: 1,
                  "&:hover": {
                    borderColor: "rgba(255,240,10,0.8)",
                  },
                }}
              >
                <p>Descripcion:</p>
                {book.volumeInfo.description}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Paper>
  );
};

export default CardBook;
