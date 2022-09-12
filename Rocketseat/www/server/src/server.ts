import express from 'express'

const app = express()
app.get('/home', (request, response)=>{
    response.json(
        {
            "objeto": 
            [
                {
                    "id": 0,
                    "name": "Anuncio 1"
                },
                {
                    "id": 1,
                    "name": "Anuncio 2"
                },
                {
                    "id": 2,
                    "name": "Anuncio 3"
                },
                {
                    "id": 3,
                    "name": "Anuncio 4"
                }
            ]
        }
    )
})

app.listen(3333)