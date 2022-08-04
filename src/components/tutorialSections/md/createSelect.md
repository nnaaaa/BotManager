### Create select

```javascript
import {
    ButtonStyle,
    MessageClient,
    MessageSelect,
    MessageSelectOption,
} from 'disney.js'

class TestClient extends MessageClient {
    async ping() {
        // create select with 2 option
        const select = new MessageSelect()
            .addOptions([
                new MessageSelectOption().setValue('ping'),
                new MessageSelectOption().setValue('pong'),
            ]))

        // attach select to message's action which going to be sent
        this.message.action.addSelect(select)
    }
}

const client = new TestClient()

client.login('secret_key')
```

