const pool = require ("../database/index") //Conectando com a base de dados
const postsController = {

    getAll: async(req, res) => { //async - Sincronizar
        try{ //Repositório
            const [rows, fields] = await pool.query("select * from posts") //A constante irá receber os dados do repositório 
            res.json({data:rows}) //Alterar para data:rows. Irá imprimir os dados do banco
        } catch (error) {
               console.log (error)
        }
    }, //Conectar os campos do banco e recursos (create, update, delete)
    getById: async (req, res) => {
        try {
            const { id } = req.params
            const [rows, fields] = await pool.query("select * from posts where id = ?", [id])

            res.json({
                data: rows
            })

            res.json({
                data: rows
            })

        } catch (error) {
            console.log(error)

        }
    },
    create: async (req, res) => {
        try {
            const { title, content } = req.body
            const sql = "insert into posts (title,content) values (?,?)"
            const [rows, fields] = await pool.query(sql, [title, content])

            res.json({
                data: rows
            })

        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })

        }
    },
    update: async (req, res) => {
        try {
            const { title, content } = req.body
            const { id } = req.params

            const sql = "update posts set title = ?, content = ? where id = ?"
            const [rows, fields] = await pool.query(sql, [title, content, id])

            res.json({
                data: rows
            })

        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })

        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params

            const sql = "delete from posts where id = ?"
            const [rows, fields] = await pool.query(sql, [id])

            res.json({
                data: rows
            })

        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })

        }
    }

}

module.exports = postsController;



