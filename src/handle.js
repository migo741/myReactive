import { track } from "./collectUpdates/track.js"
import { trigger } from "./collectUpdates/trigger.js"
export function handle(){
    return {
        get(target,key){
            track()
            return Reflect.get(target,key)
        },
        set(target,key,value){
            Reflect.set(target,key,value)
            trigger()
            return true
        }
    }
}

