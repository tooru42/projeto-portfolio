export default class Id {
    static gerar(): string {
        return Math.random().toString(36).substring(2, 9);
    }
}