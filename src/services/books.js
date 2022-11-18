const baseURL =
  "https://www.googleapis.com/books/v1/volumes?q=Harry%20Potter?maxResults=30";

export const get = async (book) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${book}&maxResults=30`
    );
    return await response.json();
  } catch (error) {
    console.log("error", error);
  }
};
