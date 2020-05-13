import { Options } from 'k6/options';

import { thresholds } from '@common/defaultOptions.js';

import { CreateEntryCommand } from './CreateEntryCommand/CreateEntryCommand.js';

export const options: Partial<Options> = {
    stages: [
        {
            duration: "5m",
            target: 100,
        },
        {
            duration: "500m",
            target: 100,
        },
        {
            duration: "5m",
            target: 0,
        },
    ],
    thresholds: {
        "http_req_waiting": [{
            threshold: "p(95)<10000",
            abortOnFail: true,
            delayAbortEval: "10s"
        }],
    },
};

export default () => {
    const command = new CreateEntryCommand();
    command.execute();
};
