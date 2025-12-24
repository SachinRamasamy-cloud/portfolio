import axios from "axios";
import base from "./common";

// export const getAll = () => axios.get(`${base}/projects`)

// export const addPro = (data) => axios.post(`${base}/projects`, data)

// export const updatePro = (id, data) =>
//     axios.put(`${base}/projects/${id}`, data);


// export const getAll = () => axios.get(`${base}/projects`);
export const getby = (id) => axios.get(`${base}/projects/${id}`,);
// export const addPro = (data) => axios.post(`${base}/projects`, data);
// export const updatePro = (id, data) =>
//   axios.put(`${base}/projects/${id}`, data);
// export const del =(id)=>{
//     axios.delete(`${base}/projects/${id}`)
// }


export const getAll = () => {
  return axios.get(`${base}/projects`);
};

// export const getBy = (id) => {
//   return axios.get(`${base}/projects/${id}`);
// };

export const addPro = (formData) => {
  return axios.post(`${base}/projects`, formData);
};

export const updatePro = (id, formData) => {
  return axios.put(`${base}/projects/${id}`, formData);
};

export const delPro = (id) => {
  return axios.delete(`${base}/projects/${id}`);
};
