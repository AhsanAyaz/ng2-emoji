# ng2-emoji

## Installation

To install this library, run:

```bash
$ npm install ng2-emoji --save
```

## Usage

`VERY IMPORTANT`
In one of your css/scss files. include these styles:

```css
.emoji{
    display:inline-block;
}
```

In your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { Ng2EmojiModule } from 'ng2-emoji';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Include the awesome
    Ng2EmojiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

In your `index.html`:
```xml
<link href="./node_modules/ng2-emoji/dist/css/ng2-emoji.css" rel="stylesheet">
```

In your component where you want to use `ng2-emoji`, just use:
```xml
 <div class="message-container" [innerHTML]="myMessageString | emojis">
 </div>
```
where the model `myMessageString` inside your `@Component` will be:

```typescript
...
export class MyComponent {
    public messageString: string = "";
    constructor() {
        this.messageString = "Hello, how are you? :smile:";
    }
}
```

## Development

Clone the repository:
```
git clone https://github.com/AhsanAyaz/ng2-device-detector
```

Install dependencies
```
npm install
```

To generate all `*.js`, `*.js.map` and `*.d.ts` files:

```bash
$ npm run tsc
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Ahsan Ayaz](ahsan.ubitian@gmail.com)
