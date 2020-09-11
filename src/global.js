import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
.introduction, .about, .expertise, .projects, .contact{
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
}
.nav-item{
    color: ${({ theme }) => theme.navTitle};
}
.link-icon{
    color: ${({ theme }) => theme.text}
}
`