const borderBox = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  width: '18.75rem',
  height: '18.75rem',
  marginBlock: "22px",
  marginInline: "auto"
}

const typography = {
  fontSize: '6.25rem',
  fontWeight: '700',
  color: "#ffffff",
  fontFamily: "Roboto Flex"
}

const focusBox = {
  ...borderBox,
  border: 'solid 3px #4DCBD3'
}

const restBox = {
  ...borderBox,
  border: "solid 3px #F21616"
}

export const styles = {
  focusBox,
  restBox,
  typography
}
