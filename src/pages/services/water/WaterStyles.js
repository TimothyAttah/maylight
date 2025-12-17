import styled from 'styled-components';
import { motion } from 'framer-motion';
import watrerBg from '../../../assets/waterBg.jpg';

export const HeroSection = styled.section`
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const HeroBG = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${watrerBg});
  background-size: cover;
  background-position: center;
  filter: brightness(0.45);
`;

export const HeroContent = styled(motion.div)`
  color: white;
  max-width: 800px;
  padding: 20px;
  z-index: 2;
  background: var(--glow-1);

  h1 {
    font-size: 2rem;
    line-height: 2.2rem;
    font-weight: 700;
  }

  p {
    margin-top: 15px;
    font-size: 1.2rem;
    line-height: 1.4rem;
    opacity: 0.9;
  }

  div {
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  @media screen and (max-width: 560px) {
    max-width: 100%;
    padding: 20px;

    h1 {
      font-size: 1.8rem;
      line-height: 1.9rem;
    }

    p {
      margin-top: 15px;
      font-size: 1rem;
      line-height: 1.2rem;
      opacity: 0.9;
    }
  }

  @media screen and (max-width: 420px) {
    max-width: 100%;

    div {
      margin-top: 40px;
      flex-direction: column;

      button {
        width: 100%;
      }
    }
  }
`;

export const Container = styled(motion.div)`
  background: var(--color-ui-primary);
`;

export const WaterServicesContent = styled.div`
  margin-top: 120px;

  h2 {
    font-size: 55px;
    line-height: 60px;
    text-align: center;
    padding-bottom: 20px;
  }

  p {
    font-size: 20px;
    line-height: 30px;
    padding-top: 20px;
  }

  @media screen and (max-width: 560px) {
    text-align: center;
    h2 {
      font-size: 40px;
      line-height: 50px;
    }
  }
`;

export const WaterServicesContentList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 20px;
  color: var(--color-ui-primary);

  div {
    padding: 20px;
    width: 100%;
    padding: 10px;
    background: var(--color-ui-secondary);
    border-radius: var(--radius-2);
    transition: var(--transition);

    h3 {
      color: #f3f4f6;
    }

    p {
    }

    &:hover {
      background: var(--color-ui-variant);
    }
  }

  @media (width >= 48rem /* 768px */) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (width >= 64rem /* 1024px */) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
`;

export const CTA = styled.div`
  margin-top: 100px;
  background: var(--glow-1);
  padding: 80px 24px;
  text-align: center;
  color: var(--color-ui-primary);
  color: #f3f4f6;
  border-top-left-radius: 24px /* 1.5rem = 24px */;
  border-top-right-radius: 24px /* 1.5rem = 24px */;

  h2 {
    font-size: 35px;
    line-height: 45px;
  }

  p {
    font-size: 25px;
    line-height: 35px;
    padding-top: 10px;
  }

  button {
    margin-top: 30px;
  }
`;
