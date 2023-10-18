import { Pipe, PipeTransform } from "@angular/core";
import { Hero } from "../../interface/hero.interface";

@Pipe({
    name: 'sortby'
})

export class SortByPipe implements PipeTransform{
    transform( heroes:Hero[], orderBy?: keyof Hero | ''): Hero[]{
        switch(orderBy){
            case 'name':
                return heroes.sort((a,b)=> a.name > b.name ? 1 : -1)
            case 'color':
                return heroes.sort((a,b)=> a.color > b.color ? 1 : -1)
            case 'canFly':
                return heroes.sort((a,b)=> a.canFly > b.canFly ? 1 : -1)
            default:
                return heroes
        }
    }
}