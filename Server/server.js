const { createServer } = require('http')

const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('<h1>Ola mundo teste </h1>')
    res.end()
})

server.listen(8000, () => {
    console.log('Ouvindo a porta 8000')
})