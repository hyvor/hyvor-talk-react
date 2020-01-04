export function addScript(src, id) {
  var script = document.createElement('script')
  script.src = src
  script.id = id

  document.body.appendChild(script)
}

export function removeScript(id) {
  var script = document.getElementById(id)
  if (id) {
    script.parentElement.removeChild(script)
  }
}