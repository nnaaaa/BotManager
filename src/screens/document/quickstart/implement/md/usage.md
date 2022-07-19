## Usage

```javascript
import { MarkdownBuilder, MessageClient } from 'disney.js'

class WeatherClient extends MessageClient {
    async getToday() {
        const data = await fetch('http://weather...')
        this.channel.send({
            content: data.map((d) => d.toString()).join('\n'),
        })
    }

    async getAt(country) {
        const data = await fetch(`http://weather...?country=${country}`)
        this.message.reply({
            content: data.map((d) => d.toString()).join('\n'),
        })
    }
}

const client = new WeatherClient()

client.login('secret_key')
```
