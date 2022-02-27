import express from 'express'
import morgan from 'morgan';
import pkg from '../package.json'
import productosRoutes from './routes/productos.routes'

const app = express()

app.set('pkg', pkg)
app.use(express.json()); //Se utiliza el metodo json para que entienda los datos que llegan al servidor
app.use('/productos', productosRoutes)
app.use(morgan('dev'));
app.get('/', (req, res) => {
    res.json({
        autor: app.get('pkg').author,
        descripcion: app.get('pkg').description,
        docente: app.get('pkg').docente,
        version: app.get('pkg').version,
    })
})



export default app;