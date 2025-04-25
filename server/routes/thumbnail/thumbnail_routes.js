const express = require('express');
const router = express.Router();
const axios = require('axios');
const cheerio = require('cheerio');
const youtubeThumbnail = require('youtube-thumbnail');

router.get('/tn/:videoId', async (req, res) => {
  const videoId = req.params.videoId;
  const url = `https://www.youtube.com/watch?v=${videoId}`;
  const thumbnail = youtubeThumbnail(url).high.url;

  try {
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36'
      }
    });
    const $ = cheerio.load(response.data);

    // Extraer información de los metadatos
    const title = $('meta[name="title"]').attr('content') || $('title').text();
    const description = $('meta[name="description"]').attr('content');
    const published = $('meta[itemprop="datePublished"]').attr('content');
    const channelName = $('link[itemprop="name"]').attr('content');

    res.send({
      res: 200,
      data: {
        thumbnail,
        title,
        description,
        published,
        channelName
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ res: 500, error: 'Error al obtener datos del video' });
  }
});

module.exports = router;
