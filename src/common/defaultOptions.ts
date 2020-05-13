export const stages = [
    {
        duration: "2m",
        target: 500,
    }
];

export const thresholds = {
    "http_req_waiting": [{
        threshold: "p(95)<1000",
        abortOnFail: true,
        delayAbortEval: "10s"
    }],
};
