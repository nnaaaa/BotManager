export class Env {
    static SERVER_HOST =
        'http://localhost:5000' || `${process.env.SERVER_HOST}/${process.env.SERVER_PORT}`
}
