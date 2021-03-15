const fs = require('fs');
const path = './server/db/contacts';

module.exports = {
  async load(req, res) {
    try {
      const result = await fs.readFileSync(`${path}/${req.params.id}/contacts.json`, 'utf-8');
      res.json(result);
    }
    catch {
      res.sendStatus(503);
    }
  }
};