import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MenuContextComponent} from "./menu-context/menu-context.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {AppRoutingModule} from "../../app-routing.module";
import { TemplatePageComponent } from './template-page.component';

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule
    ],
    declarations: [
        MenuContextComponent,
        NavbarComponent,
        TemplatePageComponent,

    ],
    exports: [
        MenuContextComponent,
        NavbarComponent,
        AppRoutingModule,
        TemplatePageComponent
    ]
})

export class TemplatePageModule {}