const cannonsReady = (gunners) => {
  return Object.values(gunners).every(x=>x=='aye') ? 'Fire!' : 'Shiver me timbers!'
}