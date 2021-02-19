import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form>
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/18095161?s=460&u=afaad6043224735425d5501f9815aafb9e930db4&v=4"
            alt="Ruth Maria"
          />

          <div>
            <strong>RuthMaria/bootcamp-GoStack</strong>
            <p>
              Repository with all the challenges developed during Rocketseats
              GoStack bootcamp.
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/18095161?s=460&u=afaad6043224735425d5501f9815aafb9e930db4&v=4"
            alt="Ruth Maria"
          />

          <div>
            <strong>RuthMaria/bootcamp-GoStack</strong>
            <p>
              Repository with all the challenges developed during Rocketseats
              GoStack bootcamp.
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/18095161?s=460&u=afaad6043224735425d5501f9815aafb9e930db4&v=4"
            alt="Ruth Maria"
          />

          <div>
            <strong>RuthMaria/bootcamp-GoStack</strong>
            <p>
              Repository with all the challenges developed during Rocketseats
              GoStack bootcamp.
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
