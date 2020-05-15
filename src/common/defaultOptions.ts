import { Options } from 'k6/options';


const defaultStages = [
    {
        duration: '10s',
        target: 50,
    },
    {
        duration: '10s',
        target: 100,
    },
    {
        duration: '10s',
        target: 500,
    },
    {
        duration: '1m30s',
        target: 500,
    }
];

// Current rps 100 - 200
export const middleStages = [
    {
        duration: '1s',
        target: 50,
    },
    {
        duration: '10s',
        target: 100,
    },
    {
        duration: '10s',
        target: 200,
    },
    {
        duration: '1m30s',
        target: 500,
    },
];

// Current rps 50 - 100
export const slowStages = [
    {
        duration: '1s',
        target: 10,
    },
    {
        duration: '10s',
        target: 50,
    },
    {
        duration: '10s',
        target: 100,
    },
    {
        duration: '1m30s',
        target: 500,
    },
];


export const thresholds = {
    'http_req_waiting': [{
        threshold: 'p(95)<1500',
        abortOnFail: true,
        delayAbortEval: '10s'
    }],
    'failed requests': [{
        threshold: 'rate<0.1',
        abortOnFail: true,
    }],
};

export const defaultOptions: Partial<Options> = {
    thresholds,
    stages: defaultStages,
    vus: 1,
    rps: 500,

}
