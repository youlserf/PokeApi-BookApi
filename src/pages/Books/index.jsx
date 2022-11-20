import { useState } from "react";
import {
  Card,
  CardContent,
  Container,
  Box,
  Button,
  TextField,
  Grid,
} from "@mui/material";
import { get } from "../../services/books";
import { CardBook } from "../../components";

const Books = () => {
  const [search, setSearch] = useState("");

  const [books, setBooks] = useState([]);

  const handleSearch = async () => {
    const books = await get(search);
    setBooks(books.items);
  };

  return (
    <Container maxWidth="md" sx={{ backgroundColor: "black", padding: 2 }}>
      <Box my={4}>
        <Card sx={{ backgroundColor: "#3CFF33" }}>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                gap: 3,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <TextField
                id="outlined-basic"
                label="Buscar un libro"
                fullWidth
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                size="small"
                variant="outlined"
              />
              <Box my={2}>
                <Button onClick={handleSearch} size="large" variant="contained">
                  Buscar
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Grid
        container
        spacing={2}
        mt={3}
        sx={{ backgroundColor: "#3CFF33", padding: 1 }}
      >
        {books.length > 0 &&
          books.map((book, index) => (
            <Grid item xs={12} sm={6}>
              <CardBook key={index} book={book} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Books;
