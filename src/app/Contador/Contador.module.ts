import {NgModule} from '@angular/core'
import { ContadorComponet } from './Contador/contador.component';


@NgModule({
    declarations: [
        ContadorComponet
    ],
    exports: [
        ContadorComponet        
    ],
    imports: [   
    ]

})
export class ContadorModule {}