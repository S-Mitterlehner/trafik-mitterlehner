import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  setSubTitle(subtitle: string | undefined = undefined): void {
    const base = "Trafik Mitterlehner";

    if(subtitle === undefined){
      document.title = base;
    } else {
      document.title = `${subtitle} - ${base}`
    }
  }
}
