import {Injectable, PipeTransform, Pipe} from '@angular/core';
import {Ng2EmojiService} from './ng2-emoji.service';
/**
 * Transforms any input value
 */
@Pipe({
  name: 'emojis'
})
@Injectable()
export class Ng2EmojiPipe implements PipeTransform {
  transform(value: any, args: any[]) {
    value = value + ''; // make sure it's a string
    return value.replace(Ng2EmojiService.emojisRegex, function (match: any, text: any) {
        return "<i class='emoji ng2_em_" + text + "' title=':" + text + ":'>" + text + "</i>";
    });
  }
}
