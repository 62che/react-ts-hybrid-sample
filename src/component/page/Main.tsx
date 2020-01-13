import React from 'react'

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

import { useStore } from 'lib/hook'
import RootStore from 'store'
import RouterStore from 'store/router'

import ClassCounter from 'component/example/ClassCounter'
import ClassCounterWithMobx from 'component/example/ClassCounterWithMobx'
import FunctionalCounter from 'component/example/FunctionalCounter'

import { HTTP } from '@ionic-native/http'

const useStyles = makeStyles((theme: Theme) => {
  // console.log(theme)
  return createStyles({
    default: {
      boxShadow: 'inset 0 0 0 1px gray'
    }
  })
})

const Main: React.FC = () => {
  const rootStore: RootStore = useStore()
  const router: RouterStore = rootStore.router

  const styles = useStyles()

  const onClick = () => router.push('/other')

  const onClickApi = async () => {
    console.log(HTTP)
    HTTP.setRequestTimeout(10)
    try {
      const response = await HTTP.get('https://google.com', {}, {})
      console.log(response)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Container className={styles.default}>
      <Button onClick={onClick} variant="contained">
        Button
      </Button>
      <Button onClick={onClickApi} variant="contained">
        API Test
      </Button>
      <ClassCounter initial={10} />
      <ClassCounterWithMobx />
      <FunctionalCounter />
      <Box bgcolor="primary.main" m={1} height="10em">
        Some Box
      </Box>
      <Box bgcolor="primary.main" m={1} height="10em">
        Some Box
      </Box>
      <Box bgcolor="primary.main" m={1} height="10em">
        Some Box
      </Box>
      <Box bgcolor="primary.main" m={1} height="10em">
        Some Box
      </Box>
      <Box bgcolor="primary.main" m={1} height="10em">
        Some Box
      </Box>
      <Box bgcolor="primary.main" m={1} height="10em">
        Some Box
      </Box>
      <Box bgcolor="primary.main" m={1} height="10em">
        Some Box
      </Box>
      <Box bgcolor="primary.main" m={1} height="10em">
        Some Box
      </Box>
      <Box bgcolor="primary.main" m={1} height="10em">
        Some Box
      </Box>
    </Container>
  )
}

export default Main
