export function GET() {

    const songbook = require('../../../../songBook/createLyricsJson.js')
    songbook.createLyricsJson()
    
    return {
        status: 200,
        body: {
            message: 'Songbook updated'
        }
    }
}