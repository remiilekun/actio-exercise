import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import BannerCarousel from '@components/organisms/BannerCarousel';
import { Classes } from '@components/organisms/Classes';
import { classes } from '@data/classes';

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.dark};
  flex: 1;
`;

const HomeWithClasses = () => {
  const [activeIndex, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(x => (x >= classes.length - 1 ? 0 : x + 1));
    }, 8000);

    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);

  const filteredClasses = React.useMemo(() => {
    const newClasses = [...classes];
    newClasses.splice(activeIndex, 1);
    return newClasses;
  }, [activeIndex]);

  return (
    <Wrapper>
      <BannerCarousel data={[classes[activeIndex]]} />
      <Classes data={filteredClasses} />
    </Wrapper>
  );
};

export default HomeWithClasses;
