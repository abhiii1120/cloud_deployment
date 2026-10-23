import { Hono } from 'hono'

const app = new Hono()

app.get('/health', (c) => {
  c.status(200)
  return c.json({
    message:"healthy",
    success:true,
  })
})

export default app
