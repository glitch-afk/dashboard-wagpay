/* eslint-disable @typescript-eslint/no-unused-expressions */

import React, { useContext, useEffect, useRef } from 'react';
import { CSSTransition as ReactCSSTransition } from 'react-transition-group';

const TransitionContext = React.createContext({
  parent: {},
});

function useIsInitialRender() {
  const isInitialRender = useRef(true);
  useEffect(() => {
    isInitialRender.current = false;
  }, []);
  return isInitialRender.current;
}

function CSSTransition({
  show,
  enter = '',
  enterStart = '',
  enterEnd = '',
  leave = '',
  leaveStart = '',
  leaveEnd = '',
  appear,
  unmountOnExit,
  tag = 'div',
  children,
  ...rest
}: any) {
  const enterClasses = enter.split(' ').filter((s: string) => s.length);
  const enterStartClasses = enterStart
    .split(' ')
    .filter((s: string) => s.length);
  const enterEndClasses = enterEnd.split(' ').filter((s: string) => s.length);
  const leaveClasses = leave.split(' ').filter((s: string) => s.length);
  const leaveStartClasses = leaveStart
    .split(' ')
    .filter((s: string) => s.length);
  const leaveEndClasses = leaveEnd.split(' ').filter((s: string) => s.length);
  const removeFromDom = unmountOnExit;

  function addClasses(node: any, classes: any) {
    classes.length && node.classList.add(...classes);
  }

  function removeClasses(node: any, classes: any) {
    classes.length && node.classList.remove(...classes);
  }

  const nodeRef = React.useRef(null);
  const Component = tag;

  return (
    <ReactCSSTransition
      appear={appear}
      nodeRef={nodeRef}
      unmountOnExit={removeFromDom}
      in={show}
      addEndListener={(done: any) => {
        // @ts-ignore
        nodeRef.current.addEventListener('transitionend', done, false);
      }}
      onEnter={() => {
        // @ts-ignore
        if (!removeFromDom) nodeRef.current.style.display = null;
        addClasses(nodeRef.current, [...enterClasses, ...enterStartClasses]);
      }}
      onEntering={() => {
        removeClasses(nodeRef.current, enterStartClasses);
        addClasses(nodeRef.current, enterEndClasses);
      }}
      onEntered={() => {
        removeClasses(nodeRef.current, [...enterEndClasses, ...enterClasses]);
      }}
      onExit={() => {
        addClasses(nodeRef.current, [...leaveClasses, ...leaveStartClasses]);
      }}
      onExiting={() => {
        removeClasses(nodeRef.current, leaveStartClasses);
        addClasses(nodeRef.current, leaveEndClasses);
      }}
      onExited={() => {
        removeClasses(nodeRef.current, [...leaveEndClasses, ...leaveClasses]);
        // @ts-ignore
        if (!removeFromDom) nodeRef.current.style.display = 'none';
      }}
    >
      <Component
        ref={nodeRef}
        {...rest}
        style={{ display: !removeFromDom ? 'none' : null }}
      >
        {children}
      </Component>
    </ReactCSSTransition>
  );
}

function Transition({ show, appear, ...rest }: any) {
  const { parent } = useContext(TransitionContext);
  const isInitialRender = useIsInitialRender();
  const isChild = show === undefined;

  if (isChild) {
    return (
      <CSSTransition
        // @ts-ignore
        appear={parent.appear || !parent.isInitialRender}
        // @ts-ignore
        show={parent.show}
        {...rest}
      />
    );
  }

  return (
    <TransitionContext.Provider
      value={{
        parent: {
          show,
          isInitialRender,
          appear,
        },
      }}
    >
      <CSSTransition appear={appear} show={show} {...rest} />
    </TransitionContext.Provider>
  );
}

export default Transition;
