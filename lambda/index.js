const Parser = require('rss-parser')

const parser = new Parser()
const rssUrls = ['https://www.seangroff.dev/rss.xml']

exports.handler = async (_event) => {
  try {
    const rssFeed = await Promise.all(
      rssUrls.map((url) => parser.parseURL(url))
    )
    const response = {
      statusCode: 200,
      body: JSON.stringify(rssFeed),
    }
    return response
  } catch (error) {
    throw error
  }
}
