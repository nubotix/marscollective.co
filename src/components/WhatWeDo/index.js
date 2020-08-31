import React from 'react'

import weDesign from '../../images/weDesign.svg'
import weDevelop from '../../images/weDevelop.svg'
import weWrite from '../../images/weWrite.svg'
import weLocalize from '../../images/weLocalize.svg'
import * as S from './styled'

const WhatWeDo = () => (
  <S.Wrapper>
    <h2>What we do</h2>
    <S.Itens>
      <S.Item>
        <img src={weDesign} alt="We design" />
        <S.TextWrapper>
          <h3>We design</h3>
          <p>
            Inspired by simplicity, we design elegant solutions in branding,
            advertising and UI/UX, crafting the strong presence your brand needs
            to make a difference.
          </p>
        </S.TextWrapper>
      </S.Item>
      <S.Item>
        <img src={weDevelop} alt="We develop" />
        <S.TextWrapper>
          <h3>We develop</h3>
          <p>
            Your website on the first page. Using modern technologies, we
            develop powerful websites optimized to your public and your company
            needs.
          </p>
        </S.TextWrapper>
      </S.Item>
      <S.Item>
        <img src={weWrite} alt="We write" />
        <S.TextWrapper>
          <h3>We write</h3>
          <p>
            Your company is what it does; your brand is what it speaks. We craft
            strong, direct and compelling messages for all your communication
            needs.
          </p>
        </S.TextWrapper>
      </S.Item>
      <S.Item>
        <img src={weLocalize} alt="We localize" />
        <S.TextWrapper>
          <h3>We localize</h3>
          <p>
            Does your audience <em>hablas español</em> or{' '}
            <em>fala português?</em> We can help you reach them. We do more than
            just a simple translation: we adapt your tone to their native
            language.
          </p>
        </S.TextWrapper>
      </S.Item>
    </S.Itens>
  </S.Wrapper>
)

export default WhatWeDo
