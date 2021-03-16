export class Person {
    public id: number;
    public name: string;
    public amount: number;
    public since: Date;

    constructor(props: Omit<Person, 'id'>, id?: number) {
        Object.assign(this, props)
    }
}