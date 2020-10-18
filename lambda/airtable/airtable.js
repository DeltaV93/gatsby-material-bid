// const Airtable = require('airtable');
//
// /** THIS IS YOUR SERVERLESS FUNCTION */
// exports.handler = function(event, context, callback) {
//   //pull the required information from your environment variables, which can be set in the Netlify UI
//   const {AIRTABLE_URL, AIRTABLE_BASE, AIRTABLE_API_KEY } = process.env;
//
//   // THIS FUNCTION FORMATS AND SENDS YOUR RESPONSE BACK TO YOUR FRONT-END
//   const send = body => {
//     callback(null, {
//       statusCode: 200,
//       body: JSON.stringify(body)
//     });
//   }
//
//   // CONFIGURE YOUR AIRTABLE BASE CONNECTION
//   Airtable.configure({
//     endpointUrl: AIRTABLE_URL,
//     apiKey: AIRTABLE_API_KEY
//   });
//   var base = Airtable.base(AIRTABLE_BASE);
//
//   const data = [];
//
//   /**
//    AIRTABLE REQUEST LOGIC GOES HERE, APPENDING TO DATA
//    REFERENCE YOUR BASE-SPECIFIC API FOR EXAMPLES OF
//    COMMON CRUD OPERATIONS
//    */
//
//   send(data);
// }

const Airtable = require('airtable')

Airtable.configure({
  endpointUrl: process.env.AIRTABLE_URL,
  apiKey: process.env.AIRTABLE_API_KEY
})
const base = Airtable.base(process.env.AIRTABLE_BASE)

exports.handler = function(event, context, callback) {
  const allRecords = []
  base('Tasks')
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
        const body = JSON.stringify({ taskGroup: allRecords })
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