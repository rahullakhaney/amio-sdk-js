const Request = require('./request')

class Contact extends Request {

  constructor(httpClient){
    super(httpClient)
    this.httpClient = httpClient
  }

  get(channelId, contactId, accessToken) {
    const headers = this.createHeaders(accessToken)
    return this.httpClient
      .get(`/v1/channels/${channelId}/contacts/${contactId}`, {headers})
      .then(response => response.data)
  }
}

module.exports = Contact