import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language/language.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ilias.zaazaa-portfolio';

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private languageService: LanguageService
  ) {}
  ngOnInit(): void {
    this.languageService.initLanguage();

    this.titleService.setTitle('Ilias Zaazaa | Portfolio');

    this.metaService.addTags([
      { name: 'keywords', content: 'software, developer, data' },
      {
        name: 'description',
        content: 'Software, Data and DevOps Engineer from Morocco.',
      },
    ]);

    AOS.init();
  }
}
