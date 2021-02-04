import { randomTimes, randomSleep, sample, times } from '@common/utils.js';
import { Command } from '@common/Command.js';
import { randomNumber, randomText, randomUuid } from '@common/faker';
import { post, get, put } from '@common/requests.js';

export class UpdateRenderedServiceCommand extends Command {
    public execute(): void {
        randomTimes(() => {
            const { ids, renderedService } = this.createRenderedServices();

            randomSleep(10);
            this.updateRenderedService(ids, renderedService)
            randomSleep(10);
        }, 3)
    }

    private createRenderedServices(): { ids: string[]; renderedService: any } {
        const { entry, medicalCaseIds } = this.data;
        const startDate = entry.creationTime;
        const serviceId = this.randomServiceId();
        const count = randomNumber(1, 3);
        const ids = times(count, () => randomUuid());


        const renderedService = {
            serviceId,
            medicalCaseIds,
            comment: '',
            plans: [],
        };

        post(`/entry/${entry.id}/field/rendered-service`, {
            ids,
            renderedService,
        });

        get(`/ehr/${entry.ehrId}/plan`, {
            'serviceIds[]': serviceId,
            actualOn: startDate
        });

        return { ids, renderedService };
    }

    private updateRenderedService(ids: string[], renderedService): void {
        const { entry } = this.data;
        put(`/entry/${entry.id}/field/rendered-service`, {
            ids,
            renderedService: {
                ...renderedService,
                comment: randomText(),
            }
        });

    }


    private randomServiceId(): string {
        get('/service', { limit: 100, query: 'при' });

        const { services } = get('/service', { limit: 100, query: 'прием' });

        return sample<any>(services).id;
    }
}
