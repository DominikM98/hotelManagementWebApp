import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RestaurantComponent} from "./restaurant.component";
import {OrderComponent} from "./order/order.component";
import {AddMenuItemComponent} from "./add-menu-item/add-menu-item.component";

import {TableModule } from 'ng-uikit-pro-standard';
import {FormsModule} from "@angular/forms";
import {TemplatePageModule} from "../template-page/template-page.module";

@NgModule({
    imports: [
        CommonModule,
        TableModule,
        FormsModule,
        TemplatePageModule
    ],
    declarations: [
        RestaurantComponent,
        OrderComponent,
        AddMenuItemComponent
    ],
    exports: [
        RestaurantComponent,
        OrderComponent,
        AddMenuItemComponent
    ]
})

export class RestaurantModule {}