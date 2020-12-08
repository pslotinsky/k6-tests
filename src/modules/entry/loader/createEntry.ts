import { Options } from 'k6/options';

import { defaultOptions } from '@common/defaultOptions.js';

import { CreateEntryCommand } from './CreateEntryCommand/CreateEntryCommand.js';

export const options: Partial<Options> = {
    ...defaultOptions,
    stages: [
        {
            duration: "30s",
            target: 10,
        },
        {
            duration: "1m",
            target: 100,
        },
        {
            duration: "3m",
            target: 100,
        },
        {
            duration: "1m",
            target: 0,
        },
    ],
    rps: 80,
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
