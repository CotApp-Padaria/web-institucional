import * as React from 'react';

export interface ScrollAnimationProps {
    animateIn?: string;
    animateOut?: string;
    offset?: number;
    duration?: number;
    delay?: number;
    initiallyVisible?: boolean;
    animateOnce?: boolean;
    style?: object;
    scrollableParentSelector?: string;
    className?: string;
    afterAnimatedIn?: () => void;
}

export default class ScrollAnimation extends React.Component<ScrollAnimationProps> {
    constructor(props: ScrollAnimationProps);
}