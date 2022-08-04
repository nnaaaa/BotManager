### Create button

```javascript
import {
    ButtonStyle,
    MessageButton,
    MessageClient,
} from 'disney.js'

class TestClient extends MessageClient {
    async ping() {
        // create 2 button
        const pingButton = new MessageButton().setName('ping')
        const pongButton = new MessageButton()
            .setName('pong')
            .setStyle(ButtonStyle.SECONDARY)

        // attach buttons to message's action which going to be sent
        this.message.action.addButton(pingButton).addButton(pongButton)
    }
}

const client = new TestClient()

client.login('secret_key')
```
