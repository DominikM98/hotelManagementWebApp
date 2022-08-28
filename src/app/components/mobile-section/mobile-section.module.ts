import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TableModule } from 'ng-uikit-pro-standard';
import {FormsModule} from "@angular/forms";
import {TemplatePageModule} from "../template-page/template-page.module";

import {MobileSectionComponent} from "./mobile-section.component";
import {MobileClientsComponent} from "./mobile-clients/mobile-clients.component";
import { MobileRatingsComponent } from './mobile-ratings/mobile-ratings.component';

@NgModule({
    imports: [
        CommonModule,
        TableModule,
        FormsModule,
        TemplatePageModule,
    ],
    declarations: [
        MobileSectionComponent,
        MobileClientsComponent,
        MobileRatingsComponent,
    ],
    exports: [
        MobileSectionComponent,
        MobileClientsComponent,
        MobileRatingsComponent
    ]
})

export class MobileSectionModule {}