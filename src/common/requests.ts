import http from 'k6/http';
import { Rate } from 'k6/metrics';

import { baseUrl } from './config.js';

export const failedRequests = new Rate('failed requests');

const headers = {
    'Connection': 'keep-alive',
    'Content-Type': 'application/json;charset=UTF-8',
};

export function get(url: string, params: any = {}) {
    const query = Object.keys(params)
        .map(key => `${key}=${params[key]}`)
        .join('&');

    const { body, status } = http.get(
        encodeURI(`${baseUrl}${query ? `${url}?${query}` : url}`),
        { headers }
    );

    failedRequests.add(Number(status > 300));

    return typeof body == 'string' ? JSON.parse(body) : body;
}

export function put(url: string, data: any) {
    const res = http.put(
        encodeURI(`${baseUrl}${url}`),
        JSON.stringify(data),
        { headers },
    );

    failedRequests.add(Number(res.status > 300));

    return res;
}

export function post(url: string, data: any) {
    const res = http.post(
        encodeURI(`${baseUrl}${url}`),
        JSON.stringify(data),
        { headers },
    );

    failedRequests.add(Number(res.status > 300));

    return res;
}
