namespace helpers {
    export function arrayForEntries<T>(array: T[]): [number, T][] {
        const result: [number, T][] = []
        for (let i = 0, len = array.length; i < len; ++i) {
            result.push([i, array[i]])
        }
        return result
    }

    export function variablesPreIncrementOperator(i: number): number {
        return ++i
    }

    export function variablesPreDecresmentOperator(i: number): number {
        return --i
    }
}


namespace arrays {
    //% helper=arrayForEntries
    export function entries() {}
}