const dotenv = require('dotenv')
const logger = require('loglevel')

dotenv.config()

// const ENV = process.env.NODE_ENV || 'development'

logger.enableAll()

const CONFIG = {
  development: {
    app: {
      PORT: process.env.PORT || 4000,
    },
    client: {
      URL: process.env.CLIENT_URL || 'http://localhost:3000',
    },
    logger: {
      warn: logger.warn,
      info: logger.info,
      error: logger.error,
      trace: logger.trace,
      debug: logger.debug,
    },
    db: {
      url: process.env.DB_URL,
    },
    firebase: {
      type: 'service_account',
      project_id: 'auth-development-32f83',
      private_key_id: '5e6f7b340154fceaf5fbf0a27933c0de1a5182fb',
      private_key:
        '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCoRMoCjnevr/tV\nZXQZEmU+pA3oYCmIGKJvD1iiv2F+aQCJ5niN/CkZzsHeDvX1rRaY3ju0U+6OJqox\nuC3ovxs18UIHFj2eI7RIEnnGkqgUKFWK6BN1st7ijzwBw63XwwCyIiuEVQq9OfKo\nNvRdoBySqYaHmtq965hd5BvISYsGZfGXLQ/qkkZDFSA7hY+1ILYb93d7Wj+MtE7x\nXR56qxwRmk/03XrYrLAnlhS/sk/vHGuuFgX5Z5odl5PDUVlphpv1uz/5CCFhTlhB\nmUpfUtowOlNVf62cPaUdWhcYWWM9eyVMlJZ2A1iosxXOOgTmIOn34FRFGyvvQsnK\nohVb2AUrAgMBAAECggEAGAaWZ24LJdE1TDirrobDYQHQoIzWcUG/M6dXywkTdRau\nBoKbVP6bqb0tTjUJpnX744DbuoA/cBmSNH4tQ+3Bh162xEdHLgTAEYhdzd4T1Kj7\nqdVALg6Hp4a3FTNo54VG3KhnWUJBQcp73MvX8WRSoBhHhqY0NGjmvQU8eEkT6io5\nwkP/F8K/brGC6/ySU5zi52MvYhPGd0X9IiDC88ILJM21gaOIVsIKFiaqFaI+evPO\nXgij7GVHxQbcNP1CK8slFECP4QdbOLbPCS9ztf8p7XUxVNfmg1+oDH9Jge7qUnHb\nIpUCs7wK887DK5wA672n7y9req5OwDyOPRWDYKA7ZQKBgQDdpxlXpYK2euh7f3VP\n4zZYRiivvE0RqmT3X75kkaHlLzQEyxa5moUHHGkGayQgXFoNkXCtrsOSKIvAtT+j\n3K/k6UqvXaJhTiTZm4a5I7BbauF6iX3HTasnoGNtqZWoLa8ItlngTIIp2iQYriii\nj5uipdyhmqKod7jYYoH67zHCPwKBgQDCV/YG4Av1dWQ0MtnXAein/ph+v6mmjsK5\n0ijobny1L39px9kqzu91RxGjF+90ANbEiyvBLh1fLc9YAQU+S96AdYRTxk03nM/L\nqTEPcwKeYSHkFLtLElbrvFCZqyise96B72zdPGbxEIaeLwqgPekFJXdjp20bc55I\nvhOWjmtqFQKBgGUz3XNSQ6tT1QBGQub15CNL7VnHzRyKw0zbb0/12oiNE+A4Zija\nb3C+vQlMNBN+dzOIu3zhtbPvRVf4qZUEt176UbpeMzzgdBzTUSEJNYWX+Fl9m2s7\ngDE4nw08B/Pg3/FHaSPraub3DdIi+rS2gyYxOtqigzAOcdyCpbxQKFT7AoGAIb/O\nvNDpor25Igt2owz0zz+6UcCNAJyoGkbxzbNqOri94qvO/c0j7nTiDjWY4sdGhKk6\ndvjAJwg4iqrasz/PqvU9fqLgQ/kaaN6/41Pwr3pkvUwQXnAX4iY4xQbhMFrugBgJ\nCr5zjgd1qUC4Eq3NqpQgEJFBtFO2uCEyG6It6yUCgYEAjZFzKuBIwqL1z4sl6B/Z\nDWAS1gYdpLoU3iN1JghnREFmSvnMXRPr0d+HuNgASkAx0pFkQl58I2L7TXUpKDr8\nmbXXdLO2hbwQTaLNffPlpnTCMO3kPE38fPPBtq1RrB3pBywehixDQsVMyzY9J3iB\n7nBQGC4nR8wGXBwVbb9UiRk=\n-----END PRIVATE KEY-----\n',
      client_email:
        'firebase-adminsdk-cq5dj@auth-development-32f83.iam.gserviceaccount.com',
      client_id: '111088368560611477933',
      auth_uri: 'https://accounts.google.com/o/oauth2/auth',
      token_uri: 'https://oauth2.googleapis.com/token',
      auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
      client_x509_cert_url:
        'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-cq5dj%40auth-development-32f83.iam.gserviceaccount.com',
    },
  },
}

// module.exports = CONFIG[ENV]
module.exports = { CONFIG }
