## Usage

```javascript
import { Client } from '@disneyjs/bot'

class DatabaseClient extends Client {
    update() {
        console.log(this.msgWorker.guild)
    }

    find() {
        console.log(this.msgWorker.message)
    }
}

const client = new DatabaseClient()

client.login('token')
```
