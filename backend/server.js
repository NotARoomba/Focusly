require('dotenv').config()
const { MongoClient } = require('mongodb');
const bodyparser = require('body-parser');
const express = require('express');
const cors = require('cors');
const { textVide } = require('text-vide');
const winston = require('winston');
const { hostname }  = require('os');
require('winston-syslog');
const papertrail = new winston.transports.Syslog({
  host: 'logs2.papertrailapp.com',
  port: 53939,
  protocol: 'tls4',
  localhost: hostname(),
  eol: '\n',
});

const logger = winston.createLogger({
  format: winston.format.simple(),
  levels: winston.config.syslog.levels,
  transports: [papertrail],
});
logger.info('INIT APP')

async function main() {
  const mongo = await MongoClient.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true, keepAlive: true })
  const app = express()
  const allowedOrigins = ['http://localhost:3000', 'https://focusly.notaroomba.xyz', 'https://notaroomba.xyz', 'http://focusly.notaroomba.xyz','https://focusly.awangran.repl.co'];

  app.use(cors({
    origin: allowedOrigins,
    credentials: true
  }));
  app.use(bodyparser.json())

  app.get('/', (req, res) => {
    return res.send("Hey you're not supposed to be here!")
  })
  app.post('/user', (req, res) => {
    const users = mongo.db("userData").collection("users");
    const user = await users.findOne(req.body)
    if (user != null) return res.send(user);
    else return res.send("That user doesn't exist!")
  })
  app.get('/users', async (req, res) => {
    const users = mongo.db("userData").collection("users");
    res.json(await users.find().toArray());
  })
  app.post('/email', (req, res) => {
    res.end(sendMail(req.body));
  })
  app.post('/signup', async (req, res) => {
    if (!req.body.email || !(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(req.body.email))) {
      return await res.send({body: "Enter a valid email!"})
    }
    const users = mongo.db("userData").collection("users");
    if (await users.findOne(req.body) != null) {
      return res.send({text: "That email already exists!"}) }
    if (req.body.name) {
      try {
        await users.insertOne(req.body)
        return res.sendStatus(200);
      } catch (e) {
        logger.error(e)
        res.sendStatus(400);
        return res.send(e)
      }
        
    } else {
      return res.sendStatus(200)
    }
  })
  app.post('/userupdate', async (req, res) => {
    const users = mongo.db("userData").collection("users");
    await users.updateOne(req.body[0], req.body[1])
    return await res.sendStatus(200)
  })
  app.post('/bionic'), async (req, res) => {
    return res.send({ text: textVide(req.body.text) })
  }
  //Efficient Summarization for Educational Texts: Generate concise, detailed summaries of texts from all education levels, covering a wide range of subjects. Use headings for big topics, and bullet points for listable elements. Retain all relevant details while keeping the summaries as short as possible, assuming character limits from the size of the text. Send the finished text ONLY in HTML with all the html elements used. The text you have to summarise use is: "explain _ to someone who likes _"
  app.post('/summary'), async (req, res) => {
    const openai = await import('openai-token')
    const auth = new openai.Authenticator(process.env.OPENAI_EMAIL, process.env.OPENAI_PASSWORD)
    await auth.begin()
    const token = await auth.getAccessToken()

    const chat = await import('chatgpt')
    const api = new chat.ChatGPTUnofficialProxyAPI({
      accessToken: token,
      apiReverseProxyUrl: "https://api.pawan.krd/backend-api/conversation"
    })
  }
  app.listen(3001, (err) => {
    if (err) console.log("Error in server setup: " + err)
    console.log('Server listening on port 3001');
  })
}

main().then()