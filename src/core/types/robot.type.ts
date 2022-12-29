export type robotType = {
    id: string;
    speed: number;
    stamina: number;
    creationDate: number;
    user: string;
    imagen: string;
};

export class RobotClass implements robotType {
    static generateId() {
        const aNumbers = new Uint32Array(1);
        crypto.getRandomValues(aNumbers);
        return ('000000' + aNumbers[0]).slice(-6);
    }

    constructor(
        public id: string,
        public speed: number,
        public stamina: number,
        public creationDate: number,
        public user: string,
        public imagen: string
    ) {
        this.id = RobotClass.generateId();
        this.speed = 0;
        this.stamina = 0;
        this.creationDate = 0;
        this.user = ' ';
        this.imagen = ' ';
    }
}
