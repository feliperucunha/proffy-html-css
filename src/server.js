//dependencias/servidor
const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

const {
    pageGiveClasses,
    pageLanding,
    pageStudy,
    saveClasses
} = require('./pages')

//nunjuck
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//rotas
server
.use(express.urlencoded({extended: true}))
.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5001) 


