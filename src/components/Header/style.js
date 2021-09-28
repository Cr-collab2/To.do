import styled from 'styled-components'

export const Container = styled.header`
  background: url(${props => props.darkMode === false ? props.backgroundL : props.backgroundD });
  height: 18.8rem;
`
