### More advanced with markdown

```javascript
import {
    MarkdownBuilder,
    MessageClient,
} from 'disney.js'

class TestClient extends MessageClient {
    async ping() {
        this.message.send({ content: MarkdownBuilder.inlineCode("const h = 'hello'") })

        this.message.send({ 
            content: MarkdownBuilder.codeBlock(
                // tag utility break line without \n
                MarkdownBuilder.tag`
                    a = "hello"
                    b = "world"
                    c = a + " " + b
                    print(c)
                `
            ,"python")
        })
    }
}

const client = new TestClient()

client.login('secret_key')
```