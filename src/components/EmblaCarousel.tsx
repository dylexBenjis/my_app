'use client'
import React, { useEffect } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

type SlideType = {
  width: string;
  height: string;
  src: string;
};

type PropType = {
  slides: SlideType[];
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props

  console.log(slides)
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  console.log(slides)
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  useEffect(() => {
    if (emblaApi){console.log(emblaApi)}}, [emblaApi])
  return (
    <section className="">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex items-center gap-x-3 mx-3">
          {slides.map((element, index) => (
            <div className={`flex flex-shrink-0 bg-gray-500 h-[${element.height}px]`} key={index}>
               <Image width={parseInt(element.width)} height={parseInt(element.height)} src={element.src} alt='' style={{height:'100%', margin:0}} className='shadow-xl'/>
            </div> 
          ))}
        </div>
      </div>

      <div className="embla__controls"> 
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={
                index === selectedIndex ? ' embla__dot--selected' : 'embla__dot'
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
