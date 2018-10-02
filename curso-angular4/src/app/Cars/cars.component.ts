import { Component } from '@angular/core';

@Component({
    selector: 'cars',
    templateUrl:'./cars.component.html'
})

export class CarsComponent{
    public name_component = 'My cars collection';
    public cars_list = 'Ford, Renault, Toyota';
}
