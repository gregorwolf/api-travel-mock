var travel = require("./data/Travel.json");

module.exports = (db)=>{
  const { Travel } = db.entities(
    'TravelService'
  )
  return cds.run ([
    INSERT.into(Travel).entries(travel),
  ])
}
