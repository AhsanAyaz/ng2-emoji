import {Pipe, PipeTransform} from '@angular/core';
import {Ng2EmojiService} from './ng2-emoji.service';

@Pipe({
  name: 'emojis'
})
export class Ng2EmojiPipe implements PipeTransform{
  transform(value: string, args: any[]) {
    value = value + ''; // make sure it's a string
    return value.replace(Ng2EmojiService.emojisRegex, function (match, text) {
        return "<i class=\"emoji icon-ng2_em_" + text + "\" title=\":" + text + ":\" style=\"display:inline-block;\"></i>";
    });
  }
}
