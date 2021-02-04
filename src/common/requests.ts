import http from 'k6/http';
import { Rate } from 'k6/metrics';

import { baseUrl } from './config.js';

import { USER_ID, ORGANIZATION_ID } from '@common/constants.js';
export const failedRequests = new Rate('failed requests');

const user = {
    id: USER_ID,
    email: 'admin@chaika.club',
    organizationId: ORGANIZATION_ID,
}

const headers = {
    'Connection': 'keep-alive',
    'Content-Type': 'application/json;charset=UTF-8',
    'user': encodeURI(JSON.stringify(user)),
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
