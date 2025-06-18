import fs from 'fs'
import path from 'path'
import axios from 'axios'
import archieml from 'archieml'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

// google doc ids
const GOOGLE_DOC_ID = '1EaoXpjWxg-88aYZG2AEmxujMvRB4LSEzu8DfywSluUs'
const GOOGLE_SHEET_ID = '1MB648AantfCtQxGzbQlSy3ztp-uQXbciqOIiBvUHimk'
const SHEET_NAME = 'main'

// output json files directory
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const DATA_DIR = path.join(__dirname, '..', 'data')

// check for data directory
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true })
}

// fetch google doc and save as json
const fetchGoogleDoc = async () => {
  const url = `https://docs.google.com/document/d/${GOOGLE_DOC_ID}/export?format=txt`
  const filePath = path.join(DATA_DIR, 'data.json')

  try {
    console.log('Fetching doc...')
    const response = await axios.get(url, { responseType: 'text' })

    console.log('Doc fetched! Parsing...')
    const parsedData = archieml.load(response.data)

    fs.writeFileSync(filePath, JSON.stringify(parsedData, null, 2))
    console.log(`Doc data saved to ${filePath}`)
  } catch (error) {
    console.log(
      'Error fetching doc:',
      error.response?.status,
      error.response?.statusText
    )
    console.error('Full error:', error)
  }
}

// fetch google sheet and save as json
const fetchGoogleSheet = async () => {
  const url = `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/gviz/tq?tqx=out:json&sheet=${SHEET_NAME}`
  const filePath = path.join(DATA_DIR, 'projects.json')

  try {
    console.log('Fetching sheet...')
    const response = await axios.get(url, { responseType: 'text' })

    // extract json
    const jsonStr = response.data.match(/\{.*\}/s)[0]
    const jsonData = JSON.parse(jsonStr)

    // convert to structured json
    const headers = jsonData.table.cols.map(col => col.label)
    const rows = jsonData.table.rows.map(row => {
      let obj = {}
      row.c.forEach((cell, index) => {
        let value = cell ? cell.v : null

        // check and convert date format
        if (typeof value === 'string' && value.startsWith('Date(')) {
          const dateParts = value.match(/\d+/g) // extract numbers
          if (dateParts) {
            const [year, month, day] = dateParts.map(Number)
            value = new Date(year, month, day).toISOString().split('T')[0] // convert to YYYY-MM-DD
          }
        }

        obj[headers[index]] = value
      })
      return obj
    })

    fs.writeFileSync(filePath, JSON.stringify(rows, null, 2))
    console.log(`Sheet data saved to ${filePath}`)
  } catch (error) {
    console.log(
      'Error fetching sheet:',
      error.response?.status,
      error.response?.statusText
    )
    console.error('Full error:', error)
  }
}

const fetchAllData = async () => {
  await fetchGoogleDoc()
  await fetchGoogleSheet()
}

fetchAllData()
