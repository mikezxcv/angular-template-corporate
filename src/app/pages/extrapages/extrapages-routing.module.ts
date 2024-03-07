import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component pages
import { StarterComponent } from "./starter/starter.component";
import { ProfileComponent } from "./profile/profile/profile.component";
import { SettingsComponent } from "./profile/settings/settings.component";
import { TeamComponent } from "./team/team.component";
import { TimelineComponent } from "./timeline/timeline.component";
import { FaqsComponent } from "./faqs/faqs.component";
import { PricingComponent } from "./pricing/pricing.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { SitemapComponent } from "./sitemap/sitemap.component";
import { SearchResultsComponent } from "./search-results/search-results.component";
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';

const routes: Routes = [
  {
    path: 'starter',
    component: StarterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtraPagesRoutingModule { }
