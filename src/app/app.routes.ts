import { Routes } from '@angular/router';

import { AchatComponent } from './achat/achat.component';
import { AdministrationComponent } from './administration/administration.component';
import { FinancesComponent } from './finances/finances.component';
import { LogistiqueComponent } from './logistique/logistique.component';
import { MarketingComponent } from './marketing/marketing.component';
import { AppComponent } from './app.component';
import { CommercialComponent } from './commercial/commercial.component';
import { ArticleComponent } from './article/article.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { ClientComponent } from './client/client.component';
import { DevisComponent } from './devis/devis.component';
import { BcommandComponent } from './bcommand/bcommand.component';

export const routes: Routes = [

    { path: '', component:AppComponent },
    { path: 'achat', component:AchatComponent },
    { path: 'administration', component: AdministrationComponent },
    { path: 'finances', component:FinancesComponent  },
    { path: 'logistique', component:LogistiqueComponent },
    { path: 'marketing', component:MarketingComponent },
    { path: 'commercial', component:CommercialComponent },
    { path: 'article', component:ArticleComponent },
    { path: 'fournisseur', component:FournisseurComponent},
    { path: 'client', component:ClientComponent},
    { path: 'Devis', component:DevisComponent},
    { path: 'Bcommand', component:BcommandComponent}
];
