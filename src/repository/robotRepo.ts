import { RobotClass } from '../core/types/robot.type';
import { Repository } from './repo';

const invalidIdError = new Error('Invalid ID');

export class RobotRepo implements Repository<RobotClass> {
    constructor(private url = 'http://localhost:3300/robots/') {}

    async load(): Promise<RobotClass[]> {
        const resp = await fetch(this.url);
        if (!resp.ok)
            throw new Error(`Error ${resp.status}: ${resp.statusText}`);
        return await resp.json();
    }

    async create(payload: Partial<RobotClass>): Promise<RobotClass> {
        const resp = await fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-type': 'application/json',
            },
        });
        if (!resp.ok)
            throw new Error(`Error ${resp.status}: ${resp.statusText}`);
        return await resp.json();
    }

    async update(payload: Partial<RobotClass>): Promise<RobotClass> {
        if (!payload.id) return Promise.reject(invalidIdError);
        const resp = await fetch(this.url + payload.id, {
            method: 'PATCH',
            body: JSON.stringify(payload),
            headers: {
                'Content-type': 'application/json',
            },
        });
        if (!resp.ok)
            throw new Error(`Error ${resp.status}: ${resp.statusText}`);
        return await resp.json();
    }

    async delete(id: RobotClass['id']): Promise<RobotClass['id']> {
        if (!id) return Promise.reject(invalidIdError);
        const resp = await fetch(this.url + id, {
            method: 'DELETE',
        });
        if (!resp.ok)
            throw new Error(`Error ${resp.status}: ${resp.statusText}`);
        return id;
    }
}
