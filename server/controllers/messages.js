const { create } = require('domain');
const fs = require('fs');
const path = './server/db/messages';

module.exports = {
  load(req, res) {
    fs.readFile(`${path}/${req.query.user}/${req.query.chat}.json`, 'utf-8', async (err, result) => {
      if (!err) {
        res.json(result);
      } else {
        try {
          const createNew = await this.create(req.query.user, req.query.chat);
          if (createNew) {
            res.json([]);
          }
        }
        catch {
          res.sendStatus(503);
        }
      }
    })
  },
  async create(user, id) {
    try {
      const res = await fs.writeFileSync(`${path}/${user}/${id}.json`, JSON.stringify([]));
      return !!res;
    }
    catch {
      return false;
    }
  },
  async send(req, res) {
    try {
      const { chat, user, name, text, date } = req.body;
      const data = JSON.parse(await fs.readFileSync(`${path}/${user}/${chat}.json`, 'utf-8'));
      data.push({ name, text, date });

      fs.writeFile(`${path}/${user}/${chat}.json`, JSON.stringify(data), err => {
        if (!err) {
          res.json({ ok: true });
        } else {
          res.sendStatus(503);
        }
      });
    }
    catch {
      res.sendStatus(404);
    }
  }
};