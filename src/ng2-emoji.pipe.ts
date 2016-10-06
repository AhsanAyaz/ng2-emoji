import {Injectable, Pipe} from '@angular/core';
import {Ng2EmojiService} from './ng2-emoji.service';
@Pipe({
  name: 'emojis'
})
@Injectable()
export class Ng2EmojisPipe {
  /*
    Takes a value and makes it lowercase.
   */
  transform(value: string, args: any[]) {
    value = value + ''; // make sure it's a string
    return value.replace(Ng2EmojiService.emojisRegex, function (match, text) {
        return "<i class='emoji ng2_em_" + text + "' title=':" + text + ":'>" + text + "</i>";
    });
  }
}