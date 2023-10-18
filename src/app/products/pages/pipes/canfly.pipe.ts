import { Pipe } from "@angular/core";

@Pipe({
    name: 'canfly'
})

export class CanFlyPipe{
    transform( value: boolean){
        return value ? "Yes" : "No"
    }
}