import * as req from 'request'
import cheerio from 'cheerio'

export default function hello(request, response) {
    if (
        request.method === 'GET' &&
        request.query.value &&
        request.query.value.length == 9
    ) {
        const nif = Number(request.query.value)

        req({ uri: `https://www.nif.pt/${nif}` }, (error, body) => {
            if (error) {
                response.status(400).send({ nif: null })
            } else {
                let $ = cheerio.load(body.body)
                let company = $('.search-title').text().toUpperCase()
                return response.status(200).json({
                    nif: nif,
                    name: company
                })
            }
        })
    } else {
        return response.status(400).send({ nif: null })
    }
}
