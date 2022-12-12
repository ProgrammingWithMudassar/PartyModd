import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

type Props = {
    alt?: string,
    src: string,
    width?: string,
    style?:any
    classes?:string
}

export default function LazyImage(props: Props) {
    return (
        <LazyLoadImage
            alt={props.alt}
            src={props.src}
            effect="blur"
            style={{width:props.width,...props.style}}
            className={props.classes}
        />
    )
}
