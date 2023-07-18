import {Title,NameContainer } from '../style'
import { Card } from '../components/Card/Card'
import useRequesteData from '../hooks/useRequesteData'

const UserNamesPage = () => {

  const [nomeUsuarios, isLoading, isError] = useRequesteData('users')


  return (
    <div>
      <Title>Nomes dos usuários</Title>
      <NameContainer>
        {isError ? <p>Erro</p> :
        isLoading ? <p>carregando...</p> : 
        nomeUsuarios.map((usuario) => {
          return(
          <Card 
          key={usuario.id} 
          text={usuario.name} 
          backgroudColor={'nome'}
          textColor={'nome'}
          />)
        })}
      </NameContainer>
    </div>
  );
}

export default  UserNamesPage;



