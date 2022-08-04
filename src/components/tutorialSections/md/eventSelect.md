### Listen Select Event

```javascript
import {
    ButtonStyle,
    MessageClient,
    MessageSelect,
    MessageSelectOption,
} from 'disney.js'

class TestClient extends MessageClient {
    async ping() {
        // ...

        // you have to send message before listening event from it
        const message = await this.message.send({ content: 'Ping to server' })

        // use the action you have attach the select to listen event
        message.action.onSelect((interaction) => {
            // do something with interaction
        })
    }
}

const client = new TestClient()

client.login('secret_key')
```
