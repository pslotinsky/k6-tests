import http from 'k6/http';
import { Rate } from 'k6/metrics';

import { baseUrl } from './config.js';

import { USER_ID, ORGANIZATION_ID } from '@common/constants.js';
export const failedRequests = new Rate('failed requests');

const user = {
    id: '246d7fba-0de2-4a9f-9c8f-b6e35e0681a1',
    email: 'admin@chaika.club',
    organizationId: '917110f2-402d-4bdd-b52f-591d0204b3da',
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
