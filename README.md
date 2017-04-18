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
    Ng2EmojiModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

In your `index.html`:
```xml
<link href="./node_modules/ng2-emoji/css/ng2-emoji.css" rel="stylesheet">
```

OR if using angular-cli.json, use:
```json
 "apps": [
    {
      ...
      "styles": [
        "styles.css",
        "../node_modules/ng2-emoji/css/ng2-emoji.css"
      ],
      ...
  ]
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
    public messageString: String = "";
    constructor() {
        this.myMessageString = 'Hello, how are you? :smile: It was fun at the bowling game the other day :joy:';
    }
}
```

## Development

Clone the repository:
```
git clone https://github.com/AhsanAyaz/ng2-emoji
```

Install dependencies
```
npm install
```

To build the library:

```bash
npm run build
```

To generate the spritesheet :

```bash
gulp sprite
```

To lint all `*.ts` files:

```bash
npm run lint
```



## License

MIT © [Ahsan Ayaz](ahsan.ubitian@gmail.com)
