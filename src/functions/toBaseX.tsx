
function toBaseX(id: string, x: number) {
  const base = "0123456789abcdefghijklmnopqrstuvwxyz"
  const a = id.slice(0,-3)
  const b = id.slice(1,-2)
  const c = id.slice(2,-1)
  const d = id.slice(-1)
  const na = base.indexOf(a)*x**3
  const nb = base.indexOf(b)*x**2
  const nc = base.indexOf(c)*x**1
  const nd = base.indexOf(d)
  return (na + nb + nc + nd).toString().padStart(6, '0')
}

export default toBaseX