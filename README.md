# ng2-emoji

![image](https://travis-ci.org/AhsanAyaz/ng2-emoji.svg?branch=master)

## Installation

To install this library, run:

```bash
$ npm install ng2-emoji --save
```

# Demo Example
See the live example (Angular4 project) [here](https://ahsanayaz.github.io/ng2-emoji/)


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

## Run example locally
Perform the following steps to serve the Angular example locally.
Navigate to [http://localhost:4200](http://localhost:4200) after that.

```bash
cd example
npm install
ng serve
```

## Contribution
Feel free to contribute to this repo by:
- Adding Examples
- Resolving open issues

Thanks to [Juan Carlos](https://github.com/juanpago) for the amazing Angular example


## License

MIT © [Ahsan Ayaz](ahsan.ubitian@gmail.com)
