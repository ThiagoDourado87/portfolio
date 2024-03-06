import Projeto from '../../components/Projeto'
import Titulo from '../../components/Titulo'

import { Lista } from './styles'

const Projetos = () => (
  <section>
    <Titulo fontSize={16}>Projetos</Titulo>
    <p>
      <Lista>
        <li>
          <Projeto />
        </li>
        <li>
          <Projeto />
        </li>
        <li>
          <Projeto />
        </li>
        <li>
          <Projeto />
        </li>
        <li>
          <Projeto />
        </li>
        <li>
          <Projeto />
        </li>
        <li>
          <Projeto />
        </li>
        <li>
          <Projeto />
        </li>
      </Lista>
    </p>
  </section>
)

export default Projetos
