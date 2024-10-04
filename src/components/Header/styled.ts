import styled from '@emotion/styled'

export const HeaderWrapper = styled.header`
    background-color: ${({ theme }) => theme.palette.dark.main};
    padding: 18px 150px;
    position: sticky;
    top: 0;
    z-index: 9;
    border-bottom: 1px solid ${({ theme }) => theme.palette.primary.light};
`

export const NavComponent = styled.nav`
    display: flex;
    align-items: center;
    ${({ theme }) => theme.measures.container}
`

export const BrandImg = styled.img`
    width: 150px;
`

export const ClockTimeDiv = styled.div`
    color: ${({ theme }) => theme.palette.light.main};
    margin-left: auto;
`

export const TextCourse = styled.h1`
    font-size: 1.5em;
`