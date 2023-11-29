const meeting = friendList => {
  return friendList.toUpperCase()
          .replace(/(\w+):(\w+)/g,'($2, $1)')
          .split(";")
          .sort()
          .join("")
}
