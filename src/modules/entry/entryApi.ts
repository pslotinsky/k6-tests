import { CreateEntryForm, EntryData } from 'types/entry';

import { randomUuid } from '@common/faker.js';
import { post, get } from '@common/requests.js';

export function createEntry({
    id = randomUuid(),
    organizationId = 'a3fc0ddd-05f3-48bd-a052-26d2a60ac7b9',
    typeId = '508d0678-23c3-4ec5-a02b-6bf5326a4746',
    ehrId = randomUuid(),
}: CreateEntryForm) {
    const entry = { id, organizationId, typeId, ehrId };
    post('/entry', { entry });
}

export function getEntry(id: string): EntryData {
    const { entry } = get(`/entry/${id}`);
    return entry;
}
