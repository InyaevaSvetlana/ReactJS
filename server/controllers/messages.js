const fs = require('fs');
const path = './server/db/messages';

module.exports = {
  async load(req, res) {
    try {
      console.log(req.query);
      const result = await fs.readFileSync(`${path}/${req.query.user}/${req.query.chat}.json`, 'utf-8');
      res.json(result);
    }
    catch {
      res.sendStatus(503);
    }
  }
};