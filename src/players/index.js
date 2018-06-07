import dogYear from './dog-year'
import soldGK from './sold-gk'
import topTransfer from './top-transfer'

const allPlayers = []
  .concat(dogYear)
  .concat(soldGK)
  .concat(topTransfer)

allPlayers.sort((p1, p2) => p2.Overall - p1.Overall)

export default allPlayers
