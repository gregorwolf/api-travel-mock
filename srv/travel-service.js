const cds = require('@sap/cds')

module.exports = cds.service.impl (srv => {
  srv.on('reset',async () => {
    const db = await cds.connect.to('db')
    const query = await require('./init')(db);
    await db.run(()=> query)
  })
})