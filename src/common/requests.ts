import http from "k6/http";

import { baseUrl } from './config.js';

const headers = {
    'Connection': 'keep-alive',
    'Content-Type': 'application/json;charset=UTF-8',
};

export function get(url: string, params: any = {}) {
    const query = Object.keys(params)
        .map(key => `${key}=${params[key]}`)
        .join('&');

    const { body } = http.get(
        encodeURI(`${baseUrl}${query ? `${url}?${query}` : url}`),
        { headers }
    );
    return typeof body == 'string' ? JSON.parse(body) : body;
}

export function put(url: string, data: any) {
    return http.put(
        encodeURI(`${baseUrl}${url}`),
        JSON.stringify(data),
        { headers },
    );
}

export function post(url: string, data: any) {
    return http.post(
        encodeURI(`${baseUrl}${url}`),
        JSON.stringify(data),
        { headers },
    );
}
