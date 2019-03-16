class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(string) {
    const lowerCaseWords = ['the', 'a', 'an', 'but', 'of',
                      'and', 'for', 'at', 'by', 'from']
    let stringArray = string.split(" ")
    return stringArray.map( word => {
      if (stringArray.indexOf(word) === 0) {
        return Formatter.capitalize(word)
      } else if (lowerCaseWords.includes(word)) {
        return word
      } else {
        return Formatter.capitalize(word)
      }
    }).join(" ")
  }
}