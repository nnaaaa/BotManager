### Some basic markdown syntax

```javascript
import {
    MarkdownBuilder,
    MessageClient,
} from 'disney.js'

class TestClient extends MessageClient {
    async ping() {
        this.message.send({ content: MarkdownBuilder.bold('Ping bold') })

        this.message.send({ content: MarkdownBuilder.italic('Ping italic') })

        this.message.send({ content: MarkdownBuilder.underline('Ping underline') })
    }
}

const client = new TestClient()

client.login('secret_key')
```