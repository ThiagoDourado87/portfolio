import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore vero
      id quibusdam. Inventore qui reiciendis, maxime non rem nobis esse dolorem
      illo voluptates error aliquam magni? At qui tempora atque.
    </Paragrafo>
    <GithubSecao>
      <img
        src="https://github-readme-stats.vercel.app/api?username=ThiagoDourado87&show_icons=true&hide=&count_private=true&title_color=0891b2&text_color=ffffff&icon_color=0891b2&bg_color=1c1917&hide_border=true&show_icons=true"
        alt="ThiagoDourado87's GitHub stats"
      />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=ThiagoDourado87&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
