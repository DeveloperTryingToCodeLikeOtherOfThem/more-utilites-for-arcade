//% blockNamespace=variables
interface Variable {
    //% helper=variablesPreIncrementOperator  blockNamespace=variables
    //% block="pre increment %i"
    /**
     * Pre increments the value of the number
     */
    preIncrement(i: number): number
    //% helper=variablesPreDecresmentOperator 
    //% block="decrease increment %i" blockNamespce=variables
    /**
     * Decreases the the pre increment of the number
     */
    decreasePreIncrement(i: number): number
    //% helper=variablesPreIncrementOperator blockNamespace=moreVariables
    __preIncrement(i: number): number
    //% helper=variablesPreDecresmentOperator blockNamespace=moreVariables
    __decreateIncrement(i: number): number
}

//% weight=50 
namespace moreVariables { }
let a: Variable 
a.__preIncrement(0)
