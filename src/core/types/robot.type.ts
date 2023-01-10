export type robotType = {
    id: string;
    name: string;
    speed: number;
    stamina: number;
    creationDate: string;
    user: string;
    imagen: string;
    favourite: boolean;
};

export class RobotClass implements robotType {
    static generateId() {
        const aNumbers = new Uint32Array(1);
        window.crypto?.getRandomValues(aNumbers);
        return ('000000' + aNumbers[0]).slice(-6);
    }

    static getDate() {
        const date = new Date();
        return (
            date.getFullYear() +
            '/' +
            (date.getMonth() + 1) +
            '/' +
            date.getDate()
        );
    }

    static getImg() {
        const imgAddress =
            'https://robohash.org/' + RobotClass.generateId() + '.png';
        return imgAddress;
    }
    id: string;
    creationDate: string;
    imagen: string;
    favourite: boolean;

    constructor(
        public name: string,
        public speed: number,
        public stamina: number,
        public user: string
    ) {
        this.id = RobotClass.generateId();
        this.creationDate = RobotClass.getDate();
        this.imagen = RobotClass.getImg();
        this.favourite = false;
    }
}
