import { sleep } from "k6";

type Callback = () => void;

export function callPerSecond(callback: Callback, defaultSleepTime?: number) {
    return function() {
        const startTime = Date.now();

        callback();

        const executionTime = Date.now() - startTime;
        const sleepTime = defaultSleepTime ?? 1 - executionTime / 1000;
        if (sleepTime > 0) {
            sleep(sleepTime);
        }
    }
}

export function randomSleep(max: number = 15) {
    var sleepTime = max * Math.random();
    sleep(sleepTime);
}

export function randomTimes(callback: Callback, count: number = randomNumber()) {
    return times(count, callback);
}

export function times(count: number, callback: Callback) {
    const result = [];

    for (let i = 0; i < count; i++) {
        result.push(callback());
    }

    return result;
}

export function sample<T>(arr: T[]): T {
    const i = randomNumber(arr.length);
    return arr[i];
}

export function randomNumber(max: number = 15) {
    return Math.floor(max * Math.random());
}
