import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2EmojiPipe } from './ng2-emoji.pipe';
import { Ng2EmojiService } from './ng2-emoji.service';

export * from './ng2-emoji.pipe';
export * from './ng2-emoji.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Ng2EmojiPipe
  ],
  exports: [
    Ng2EmojiPipe
  ]
})
export class Ng2EmojiModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: Ng2EmojiModule,
      providers: [Ng2EmojiService]
    };
  }
}
