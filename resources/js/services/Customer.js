const baseUrl= "http://127.0.0.1:3333/api/customer"
import axios from "axios";
const customer = {};

customer.save = async (data) => {
    const urlSave = baseUrl+"/create"
    const res = await axios.post(urlSave,data)
    .then(response=>{return response.data})
    .catch(error => {return error;})

    return res;
}

export default customer;