import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { AchatComponent } from './achat/achat.component';
import { AdministrationComponent } from './administration/administration.component';
import { FinancesComponent } from './finances/finances.component';
import { LogistiqueComponent } from './logistique/logistique.component';
import { MarketingComponent } from './marketing/marketing.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent,AppComponent,AchatComponent,
    AdministrationComponent,FinancesComponent,
    LogistiqueComponent,MarketingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'managerapp';
}
