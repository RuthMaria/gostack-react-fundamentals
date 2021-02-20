import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom'; // para pegar os parametros da rota
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Header, RepositoryInfor, Issues } from './styles';
import logoImg from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

const Respository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="GitHub Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          voltar
        </Link>
      </Header>

      <RepositoryInfor>
        <header>
          <img
            src="https://avatars.githubusercontent.com/u/18095161?s=460&u=afaad6043224735425d5501f9815aafb9e930db4&v=4"
            alt="Rocketseat"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Descrição do repositorio</p>
          </div>
        </header>

        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>45</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfor>
      <Issues>
        <Link to="dffdf">
          <div>
            <strong>repository.full_name</strong>
            <p>repository.description</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Respository;
