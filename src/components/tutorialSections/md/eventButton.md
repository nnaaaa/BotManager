### Listen Button Event

```javascript
import {
    ButtonStyle,
    MessageButton,
    MessageClient,
} from 'disney.js'

class TestClient extends MessageClient {
    async ping() {
        // ...

        // you have to send message before listening event from it
        const message = await this.message.send({ content: 'Ping to server' })

        // use the action you have attach the buttons to listen event
        message.action.onButtonClick((interaction) => {
            // do something with interaction
        })
    }
}

const client = new TestClient()

client.login('secret_key')
```
