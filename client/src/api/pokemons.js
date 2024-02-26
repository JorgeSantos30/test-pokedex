import { instance } from "./base.api";

const endpoint = `/pokemons`;

export const pokemons = {
  getAll: function (limit, page) {
    return instance.get(endpoint, {
      params: {
        limit: 20,
        page: 2,
        offset: 0,
      },
    });
  },
};
