

export function effect(fn){
    global.activeEffect = fn
    fn()
    global.activeEffect = null
}