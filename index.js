class Formatter {
  //add static methods here
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^a-zA-Z0-9-' ]+/g, '');
  }

  static titleize(str) {
    const skips = ['the','a','an','but','of','and','for','at','by','from'];
    const words = str.split(" ");
    const result = [];

    words.forEach(word => {
      if (!(skips.includes(word))) {
        result.push(this.capitalize(word))
      } else {
        result.push(word);
      }
    });

    return this.capitalize(result.join(" "));
  }
}
