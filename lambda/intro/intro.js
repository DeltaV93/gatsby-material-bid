const Airtable = require('airtable')

Airtable.configure({
  endpointUrl: process.env.AIRTABLE_URL,
  apiKey: process.env.AIRTABLE_API_KEY
})
const base = Airtable.base(process.env.AIRTABLE_BASE)

exports.handler = function(event, context, callback) {
  const allRecords = []
  base('Introduction')
  .select({
    maxRecords: 100,
    view: 'Grid view'
  })
   .eachPage(
    function page(records, fetchNextPage) {
      records.forEach(function(record) {
        allRecords.push(record)
      })
      fetchNextPage()
    },
    function done(err) {
      if (err) {
        callback(err)
      } else {
        const body = JSON.stringify({ intro: allRecords })
        const response = {
          statusCode: 200,
          body: body,
          headers: {
            'content-type': 'application/json',
            'cache-control': 'Cache-Control: max-age=300, public'
          }
        }
        callback(null, response)
      }
    }
  )
}