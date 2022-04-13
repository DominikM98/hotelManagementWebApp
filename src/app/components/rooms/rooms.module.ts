import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TableModule} from "ng-uikit-pro-standard";
import {FormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RoomsComponent} from "./rooms.component";
import {AddRoomComponent} from "./add-room/add-room.component";
import {TemplatePageModule} from "../template-page/template-page.module";

@NgModule({
    imports: [
        CommonModule,
        TableModule,
        FormsModule,
        TemplatePageModule
    ],
    declarations: [
        RoomsComponent,
        AddRoomComponent
    ],
    exports: [
        RoomsComponent,
        AddRoomComponent
    ]
})

export class RoomsModule {}