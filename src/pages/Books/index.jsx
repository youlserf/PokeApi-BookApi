import {
  CardContent,
  Box,
  Container,
  TextField,
  Button,
  Card,
} from "@mui/material";
import { useState } from "react";
import CardBooks from "../../components/CardBooks";
import { get } from "../../services/books";

Box;

const Books = () => {
  const [book, setBook] = useState("");
  const [books, setBooks] = useState([]);
  const getBooks = async () => {
    try {
      const libros = await get(book);
      setBooks(libros.items);
      console.log(libros);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  const handleChange = (event) => {
    setBook(event.target.value);
  };

  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Card>
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
                label="Busca un libro"
                fullWidth
                size="small"
                variant="outlined"
                onChange={handleChange}
              />
              <Box my={2}>
                <Button
                  size="large"
                  variant="contained"
                  onClick={() => getBooks()}
                >
                  Buscar
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
      {books.length > 0 && books.map((book) => <CardBooks book={book} />)}
    </Container>
  );
};

export default Books;
