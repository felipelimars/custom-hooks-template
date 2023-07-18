import { Title, PostContainer } from '../style';
import { Card } from '../components/Card/Card';
import useRequesteData from '../hooks/useRequesteData';

const CommentsPage = () => {
  const [postagens, isLoading, isError] = useRequesteData('comments');

  return (
    <div>
      <Title>Comentários dos usuários</Title>
      <PostContainer>
        {isError ? (
          <p>Erro na postagem</p>
        ) : isLoading ? (
          <p>Carregando...</p>
        ) : (
          postagens.map((post) => (
            <Card
              key={post.id}
              text={post.body}
              backgroudColor={'#1dc690'}
              textColor={'#ffffff'}
            />
          ))
        )}
      </PostContainer>
    </div>
  );
};

export default CommentsPage;




