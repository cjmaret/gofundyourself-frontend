import styled from 'styled-components';

export const CategoriesComponent = styled.section`
  margin: 5rem 0;
  padding: 5rem 0;
  background-color: var(--white);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--white);
`;

export const CategoriesContentGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 890px;
`;

export const CategoriesTitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 0 0 1rem;
  color: var(--black)
`;

export const CategoriesTitle = styled.h2`
  margin: 0 0 1rem 0;
  font-size: 3rem;
  line-height: 1.2;
  width: 100%;
`;

export const CategoriesParagraph = styled.p`
  margin: 0 0 1rem 0;
  font-size: 2rem;
  line-height: 1.2;
  width: 100%;
`;

export const GridGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  @media (min-width: 500px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }
`;

export const Card = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  overflow: hidden;
  width: 100%;
  height: 100%;
  max-width: 200px;
  margin: 0 1rem 2rem 1rem;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

export const CardTitle = styled.h3`
  position: absolute;
  z-index: 2;
  color: white;
  font-size: 3rem;
`;

export const CardImageWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  .card-image {
    width: 100%;
  }
`;

export const LinkCover = styled.a`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
`;

export const FilmCover = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1;
  transition: all 0.4s ease;
  ${Card}:hover & {
    opacity: 0.7;
  }
`;
