import React from "react";
import axios from "axios";


const instance = axios.create({
    baseURL: 'https://restcountries.com/v3.1/all',
    timeout: 3000,
    headers: {'X-Custom-Header': 'foobar'}
});

export default instance;