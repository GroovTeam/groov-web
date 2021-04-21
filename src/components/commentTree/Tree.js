/* eslint-disable react/no-children-prop */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { memo, useState } from 'react';
import { useSpring, a } from 'react-spring';
import { useMeasure, usePrevious } from './helpers';
import { Frame, Title, Content, toggle } from './styles';
import * as Icons from './icons';

const Tree = memo(({ children, name, style, defaultOpen = false }) => {
  const [isOpen, setOpen] = useState(defaultOpen);
  const previous = usePrevious(isOpen);
  const [bind, { height: viewHeight }] = useMeasure();
  const { height, opacity, transform } = useSpring({
    from: { height: 0, opacity: 0, transform: 'translate3d(20px,0,0)' },
    to: { height: isOpen ? viewHeight : 0, opacity: isOpen ? 1 : 0, transform: `translate3d(${isOpen ? 0 : 20}px,0,0)` }
  });
  const Icon = Icons[`${children ? (isOpen ? 'Minus' : 'Plus') : 'Close'}SquareO`];
  return (
    <Frame style={{color: 'black'}}>
      <Icon style={{ ...toggle, opacity: children ? 1 : 0.3 }} onClick={() => setOpen(!isOpen)} />
      <Title style={style}>{name}</Title>
      <Content style={{ opacity, height: isOpen && previous === isOpen ? 'auto' : height }}>
        <a.div style={{ transform }} {...bind} children={ children } />
      </Content>
    </Frame>
  );
});

export default Tree;