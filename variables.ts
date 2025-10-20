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

    //% helper=variablesPreIncrementOperator blockNamespace=moreVariables block="pre increment %i"
    //% blockSetVariable=myVariable
    __preIncrement(i: number): number
    //% helper=variablesPreDecresmentOperator blockNamespace=moreVariables block="decrease pre increment %i"
    //% blockSetVariable=myVariable
    __decreateIncrement(i: number): number
}

//% block="variables get" blockNamespace=variables Warning for JavaScript only
function variables_get(): Variable {
    let _variable: Variable 
    return _variable
}

//% block="variables get" blockNamespace=moreVariables
function _variables_get() {
    return variables_get()
}

//% weight=50 block="variables"
namespace moreVariables { }
let a: Variable 
a.__preIncrement(0)
