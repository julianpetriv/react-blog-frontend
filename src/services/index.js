import jwt from "jsonwebtoken";
import axios from 'axios';
import { setDataToLocal } from '../utils/localStorage';
import {
    BASE_URL, IMAGES_URL
} from '../constants';


// method for get data of user from token
const GetUser = tokens => jwt.decode(tokens.jwt_token);

//base GET method
export const GetResource = async url => {
    const res = await axios.get(BASE_URL + `${url}`);
    if (!res) {
        throw new Error(`Could not axios ${url}, received ${res.status}`)
    }
    return await res.data;
};

//base POST method
export const PostResource = async (url, data) => {
    return await axios.post(BASE_URL + url, data)
        .then(res => {
            if (!res) {
                throw new Error(`Could not axios ${url}, received ${res.status}`)
            }
            return res.data;
        })
};
//base PUT method
export const PutResource = async (url, data) => {
    return await axios.put(BASE_URL + url, data)
        .then(res => {
            if (!res) {
                throw new Error(`Could not axios ${url}, received ${res.status}`)
            }
            return res.data;
        })
};

// base DELETE method
export const DeleteResource = async (url, data) => {
    return await axios.delete(BASE_URL + url, { data: data })
        .then(res => {
            if (!res) {
                throw new Error(`Could not axios ${url}, received ${res.status}`)
            }
            return res.data;
        })
};

export const SetTokensGetUser = tokens => {
    if (tokens === null) {
        return {};
    }
    if (typeof tokens === "string") {
        return tokens;
    }
    setDataToLocal("tokens", tokens);

    if (tokens.jwt_token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${tokens.jwt_token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
    return GetUser(tokens);
};

// universal method for set data and get tokens(JWT)
export const PostResourceWithTokens = async (url, data) => {
    const tokens = await PostResource(url, data);
    return SetTokensGetUser(tokens);
};

// get static file with image from some category
export const getImage = path => {
    return `${IMAGES_URL}${path}`;
};
