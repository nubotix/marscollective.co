import styled, { css } from 'styled-components'

const baseStyles = css`
  display: block;
  font-family: inherit;
  font-size: var(--bodyFont);
  border: none;
  border-radius: var(--borderRadius);
  outline: none;
  width: 100%;
  padding: var(--halfGutter);
  margin-bottom: var(--halfGutter);
`

export const Input = styled.input`
  ${baseStyles}
`

export const TextArea = styled.textarea`
  ${baseStyles}

  height: 9rem;
  margin-bottom: var(--gutter);
`
