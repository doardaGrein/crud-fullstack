import { Injectable } from '@angular/core';

import { TRANSLATIONS_EN } from './../../assets/i18n/en';
import { TRANSLATIONS_PT } from './../../assets/i18n/pt';

@Injectable({
  providedIn: 'root'
})
export class I18nService {

  private translations: any = {
    TRANSLATIONS_PT,
    TRANSLATIONS_EN
  }

  private currentLanguage: string = 'TRANSLATIONS_PT';

  getCurrentLanguage(): string {
    return this.currentLanguage;
  }

  setCurrentLanguage(language: string): void {
    this.currentLanguage = language;
  }

  getTranslation(key: string): string {
    const translaction = this.translations[this.currentLanguage];
    if (translaction && translaction[key]) {
      return translaction[key];
    }
    return key;
  }

}
