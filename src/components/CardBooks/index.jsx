import { Paper, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
const CardBooks = ({ book }) => {
  return (
    <Paper elevation={3}>
      <CardMedia
        component="img"
        image={book.volumeInfo.imageLinks?.thumbnail}
        height={200}
      />
      <CardContent>
        <Box>
          <Typography>Hello</Typography>
        </Box>
      </CardContent>
    </Paper>
  );
};

export default CardBooks;
