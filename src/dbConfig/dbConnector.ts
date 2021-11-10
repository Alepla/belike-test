import { Pool } from 'pg'

export default new Pool({
  user: 'postgres',
  host: 'postgres', // localhost in dev, postgres in pro
  database: 'belike-db',
  password: 'newPassword',
  port: 5432
})
