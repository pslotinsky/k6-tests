import { Options } from 'k6/options';

import { defaultOptions } from '@common/defaultOptions.js';

import { CreateEntryCommand } from './CreateEntryCommand/CreateEntryCommand.js';

export const options: Partial<Options> = {
    ...defaultOptions,
    stages: [
        {
            duration: "1m",
            target: 50,
        },
        {
            duration: "1m",
            target: 100,
        },
        {
            duration: "500m",
            target: 100,
        },
        // {
        //     duration: "20s",
        //     target: 100,
        // },
        // {
        //     duration: "2m30s",
        //     target: 10,
        // },
        // {
        //     duration: "20s",
        //     target: 50,
        // },
        // {
        //     duration: "1m",
        //     target: 100,
        // },
        // {
        //     duration: "10m",
        //     target: 600,
        // },
        // {
        //     duration: "2m30s",
        //     target: 10,
        // },
        // {
        //     duration: "20s",
        //     target: 50,
        // },
        // {
        //     duration: "1m",
        //     target: 100,
        // },
        // {
        //     duration: "10m",
        //     target: 600,
        // },
        // {
        //     duration: "2m30s",
        //     target: 10,
        // },
        // {
        //     duration: "20s",
        //     target: 50,
        // },
        // {
        //     duration: "1m",
        //     target: 100,
        // },
        // {
        //     duration: "10m",
        //     target: 600,
        // },
        // {
        //     duration: "2m30s",
        //     target: 10,
        // },
        // {
        //     duration: "20s",
        //     target: 50,
        // },
        // {
        //     duration: "1m",
        //     target: 100,
        // },
        // {
        //     duration: "10m",
        //     target: 600,
        // },
        // {
        //     duration: "2m30s",
        //     target: 10,
        // },
        // {
        //     duration: "20s",
        //     target: 50,
        // },
        // {
        //     duration: "1m",
        //     target: 100,
        // },
        // {
        //     duration: "10m",
        //     target: 600,
        // },
        // {
        //     duration: "2m30s",
        //     target: 10,
        // },
        // {
        //     duration: "20s",
        //     target: 50,
        // },
        // {
        //     duration: "1m",
        //     target: 100,
        // },
        // {
        //     duration: "10m",
        //     target: 600,
        // },
        // {
        //     duration: "2m30s",
        //     target: 10,
        // },
        // {
        //     duration: "20s",
        //     target: 50,
        // },
        // {
        //     duration: "1m",
        //     target: 100,
        // },
        // {
        //     duration: "10m",
        //     target: 600,
        // },
        // {
        //     duration: "2m30s",
        //     target: 10,
        // },
        // {
        //     duration: "20s",
        //     target: 50,
        // },
        // {
        //     duration: "1m",
        //     target: 100,
        // },
        // {
        //     duration: "10m",
        //     target: 600,
        // },
    ],
    rps: 50,
    thresholds: {
        "http_req_waiting": [{
            threshold: "p(95)<30000",
            abortOnFail: true,
            delayAbortEval: "10s"
        }],
    },
};

export default () => {
    const command = new CreateEntryCommand();
    command.execute();
};
