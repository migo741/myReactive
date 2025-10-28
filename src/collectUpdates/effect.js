

export function effect(target,fn){
    global.activeEffect = fn
    global.prop = target
    fn()
    global.activeEffect = null
    global.prop = null
}