import { instance } from "./base.api";

const endpoint = "/coaches";

export const coaches = {
  getAll: function () {
    return instance.get(endpoint);
  },
  deleteById: function (id) {
    return instance.delete(`${endpoint}/${id}`);
  },
};
