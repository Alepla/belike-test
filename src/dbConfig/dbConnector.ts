import { Pool } from 'pg'

export default new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'belike-db',
  password: 'newPassword',
  port: 5432
})
