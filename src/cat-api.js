
import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_H5mJnV24NobF6bABVNh3AOiQowJtHZOL4b34U6wpIEeDwd1aAGhlLx1zw7NOQY94";

export function fetchBreeds() {
  return axios.get("https://api.thecatapi.com/v1/breeds")
    .then(res => res.data)
    .catch(err => console.error(err));
}

export function fetchCatByBreed(breedId) {
  return axios(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(res => res.data[0])
    .catch(err => console.error(err));
}