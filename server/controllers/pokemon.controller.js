import axios from "axios";

async function getPokemons(req, res) {
  const { limit, page, offset } = req.query;
  console.log(limit, page);
  try {
    const response = await axios.get(
      `${process.env.API_URL}?limit=${limit}&offset=${offset}`
    );

    const { data } = response;

    console.log(data);

    const { results } = data;

    results.sort((a, b) => a.name.localeCompare(b.name));

    console.log(results);

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error });
  }
}

export { getPokemons };
