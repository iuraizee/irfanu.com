const fs = require('fs')
const path = require('path')
const archieml = require('archieml')
const axios = require('axios')

const fetchData = async () => {
  const docId = '1EaoXpjWxg-88aYZG2AEmxujMvRB4LSEzu8DfywSluUs' // extract from google doc URL
  const url = `https://docs.google.com/document/d/${docId}/export?format=txt`

  try {
    const response = await axios.get(url, { responseType: 'text' }) // ensure text response
    const parsedData = archieml.load(response.data)

    // define file path on data folder
    const dirPath = path.join(__dirname, '..', 'data')
    const filePath = path.join(dirPath, 'data.json')

    // check for existing data directory
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true })
    }

    fs.writeFileSync(filePath, JSON.stringify(parsedData, null, 2))

    console.log('✅ Google doc data saved to data.json')
  } catch (error) {
    console.error(
      '❌ Error fetching google doc:',
      error.response?.status,
      error.response?.statusText
    )
  }
}

fetchData()
