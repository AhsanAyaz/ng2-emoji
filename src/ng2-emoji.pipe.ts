import { Pipe, PipeTransform } from '@angular/core';
import { Ng2EmojiService } from './ng2-emoji.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'emojis'
})
export class Ng2EmojiPipe implements PipeTransform{

  constructor(private _sanitizer: DomSanitizer){}

  transform(value: string, args: any[]): SafeHtml {
    value = value + ''; // make sure it's a string
    return this._sanitizer.bypassSecurityTrustHtml(value.replace(Ng2EmojiService.emojisRegex, function (match, text) {
        return `<i class="emoji icon-ng2_em_${text}" title=":${text}:" style="display:inline-block;"></i>`;
    }));
  }
}
