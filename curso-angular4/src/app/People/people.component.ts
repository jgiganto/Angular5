import { Component } from '@angular/core';

@Component({
    selector: 'people',
    templateUrl: './people.component.html'
})

export class PeopleComponent{
    public prof_people = 'Admins, Users';
    public hob_people = 'Walk, Sing';
    public name:number = 12;
    public jobs:Array<any> = ['Plumber',2];
}