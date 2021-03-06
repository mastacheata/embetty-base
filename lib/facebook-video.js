const Video = require('./video')

module.exports = class FacebookVideo extends Video {
  get _requestOptions() {
    return {
      uri: `https://www.facebook.com/${this.id}`
    }
  }

  get canonicalUrl() {
    return this._response.request.uri.href
  }

  get posterImageUrl() {
    return `https://graph.facebook.com/${this.id}/picture`
  }

  toJSON() {
    return {
      canonicalUrl: this.canonicalUrl
    }
  }
}
