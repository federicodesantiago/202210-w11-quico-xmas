import { RobotClass } from '../core/types/robot.type';
import { Repository } from './repo';

const invalidIdError = new Error('Invalid ID');

export class RobotRepo implements Repository<RobotClass> {
    constructor(private url = 'http://localhost:3300/robots/') {
        //
    }

    load(): Promise<RobotClass[]> {
        return fetch(this.url).then((resp) => {
            if (!resp.ok)
                throw new Error(`Error ${resp.status}: ${resp.statusText}`);
            return resp.json();
        });
    }

    create(payload: Partial<RobotClass>): Promise<RobotClass> {
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-type': 'application/json',
            },
        }).then((resp) => {
            if (!resp.ok)
                throw new Error(`Error ${resp.status}: ${resp.statusText}`);
            return resp.json();
        });
    }
    update(payload: Partial<RobotClass>) {
        if (!payload.id) return Promise.reject(invalidIdError);
        return fetch(this.url + payload.id, {
            method: 'PATCH',
            body: JSON.stringify(payload),
            headers: {
                'Content-type': 'application/json',
            },
        }).then((resp) => {
            if (!resp.ok)
                throw new Error(`Error ${resp.status}: ${resp.statusText}`);
            return resp.json();
        });
    }
    delete(id: string): Promise<string> {
        if (!id) return Promise.reject(invalidIdError);
        return fetch(this.url + id, {
            method: 'DELETE',
        }).then((resp) => {
            if (!resp.ok)
                throw new Error(`Error ${resp.status}: ${resp.statusText}`);
            return id;
        });
    }
}
