export class MyArray {
    private array: number[];

    constructor(array: number[]) {
        this.array = array;
    }

    private somaRecursiva(array: number[], index: number): number {
        if (index === array.length) {
            return 0;
        } else {
            return array[index] + this.somaRecursiva(array, index + 1);
        }
    }

    public soma(): number {
        return this.somaRecursiva(this.array, 0);
    }
}

